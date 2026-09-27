# 🚀 Serverless Resume Analytics Platform

> A serverless resume portfolio and analytics platform built and deployed using AWS.

## 📌 Project Overview

This project is a serverless personal portfolio and resume analytics platform built using AWS.

It demonstrates:

- 🌐 Static website hosting
- 👥 Visitor analytics
- 📊 Visitor counting
- 📩 Contact form processing
- 📧 Email notifications
- 🔐 HTTPS delivery
- ☁️ Serverless backend architecture
- ⚙️ Automated deployment using GitHub Actions

---

# 📸 Project Demo

## 🌐 Portfolio Website

### Home Page

![Portfolio Website](screenshots/live-website-1.png)

### About / Resume Section

![Portfolio Website](screenshots/live-website-2.png)

### Skills / Certifications

![Portfolio Website](screenshots/live-website-3.png)

### Projects Section

![Portfolio Website](screenshots/live-website-4.png)

### Contact Section

![Portfolio Website](screenshots/live-website-5.png)

### Visitor Analytics

![Portfolio Website](screenshots/live-website-6.png)

### Additional Portfolio View

![Portfolio Website](screenshots/live-website-7.png)

---

# 🏗️ AWS Architecture

```text
                         Visitor
                            │
                            ▼
                    Amazon CloudFront
                            │
                            ▼
                       Amazon S3
                     Static Website
                            │
                            ▼
                       JavaScript
                            │
                  ┌─────────┴─────────┐
                  │                   │
                  ▼                   ▼
             API Gateway         API Gateway
             Visitor API         Contact API
                  │                   │
                  ▼                   ▼
               Lambda              Lambda
                  │                   │
                  ▼                   ▼
             DynamoDB             DynamoDB
              Visitor             Messages
                                      │
                                      ▼
                                  Amazon SES
