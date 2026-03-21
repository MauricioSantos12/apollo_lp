import react from "@vitejs/plugin-react";
import path from "path";
import { defineConfig, loadEnv, type Plugin } from "vite";
import { Resend } from "resend";

function contactApi(apiKey: string, toEmail: string): Plugin {
  return {
    name: "contact-api",
    configureServer(server) {
      server.middlewares.use("/api/contact", async (req, res) => {
        if (req.method !== "POST") {
          res.statusCode = 405;
          res.end(JSON.stringify({ error: "Method not allowed" }));
          return;
        }

        let body = "";
        req.on("data", (chunk) => (body += chunk));
        req.on("end", async () => {
          try {
            const { name, email, message } = JSON.parse(body);
            if (!name || !email || !message) {
              res.statusCode = 400;
              res.end(JSON.stringify({ error: "All fields are required" }));
              return;
            }

            const resend = new Resend(apiKey);
            const { data, error } = await resend.emails.send({
              from: `Apollo Contact <onboarding@resend.dev>`,
              to: [toEmail],
              replyTo: email,
              subject: `New message | Apollo Landing Page`,
              html: `
<div style="background-color:#f4f4f4;padding:40px 0;font-family:Arial,sans-serif;">
  <div style="max-width:500px;margin:0 auto;background:#ffffff;border-radius:8px;padding:32px;">
    <h2 style="margin:0 0 24px;text-align:center;">Nuevo mensaje de contacto</h2>
    <p><strong>Nombre:</strong> ${name}</p>
    <p><strong>Email:</strong> ${email}</p>
    <hr style="border:none;border-top:1px solid #ddd;margin:16px 0;" />
    <p style="white-space:pre-wrap;">${message}</p>
  </div>
</div>`,
            });

            res.setHeader("Content-Type", "application/json");
            if (error) {
              res.statusCode = 400;
              res.end(JSON.stringify({ error: error.message }));
            } else {
              res.end(JSON.stringify({ success: true, id: data?.id }));
            }
          } catch (err) {
            console.error("Contact API error:", err);
            res.statusCode = 500;
            res.end(JSON.stringify({ error: "Failed to send email" }));
          }
        });
      });
    },
  };
}

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd());
  return {
    plugins: [react(), contactApi(env.VITE_RESEND_API_KEY, env.VITE_RESEND_TO)],
    define: {
      global: "globalThis",
    },
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "."),
      },
    },
  };
});
