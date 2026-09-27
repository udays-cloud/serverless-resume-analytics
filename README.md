
---

# 3. The images are important

Don't just upload random screenshots. For a **professional AWS portfolio**, I recommend these 8 images:

| Image | What to capture |
|---|---|
| `website.png` | Your actual live portfolio |
| `architecture.png` | AWS architecture diagram |
| `s3-bucket.png` | S3 bucket / website hosting |
| `cloudfront.png` | CloudFront distribution |
| `api-gateway.png` | Visitor API |
| `lambda.png` | Lambda function |
| `dynamodb.png` | Visitor counter table |
| `github-actions.png` | Successful GitHub Actions deployment |

### Very important

Before uploading screenshots, **hide sensitive information** such as:

- AWS Access Key IDs
- Secret keys
- Account credentials
- API secrets
- SES credentials
- Private email addresses if you don't want them public
- Any authentication tokens

Your **AWS account ID** is generally not treated like a secret credential, but for a public portfolio I would still avoid unnecessarily exposing it.

---

# 4. Architecture image

For the architecture image, don't use a basic homemade diagram.

Use official AWS Architecture Icons and make it look like:

```text
                         USERS
                           │
                           ▼
                    ┌─────────────┐
                    │ CloudFront  │
                    └──────┬──────┘
                           │
                           ▼
                    ┌─────────────┐
                    │     S3      │
                    │  Frontend   │
                    └──────┬──────┘
                           │
                    JavaScript APIs
                           │
             ┌─────────────┴─────────────┐
             ▼                           ▼
      ┌─────────────┐             ┌─────────────┐
      │ API Gateway │             │ API Gateway │
      │ Visitor API │             │ Contact API │
      └──────┬──────┘             └──────┬──────┘
             ▼                           ▼
      ┌─────────────┐             ┌─────────────┐
      │   Lambda    │             │   Lambda    │
      └──────┬──────┘             └──────┬──────┘
             ▼                           ▼
      ┌─────────────┐             ┌─────────────┐
      │  DynamoDB   │             │  DynamoDB   │
      │   Counter   │             │  Messages   │
      └─────────────┘             └──────┬──────┘
                                         ▼



---

## 📸 Live Application

![Live Portfolio](docs/website.png)

---

## ☁️ AWS Services

| Service | Usage |
|---|---|
| Amazon S3 | Static website hosting |
| Amazon CloudFront | CDN + HTTPS |
| API Gateway | Backend APIs |
| AWS Lambda | Serverless processing |
| DynamoDB | Visitor/contact data |
| Amazon SES | Contact email |
| IAM | Access control |
| CloudWatch | Monitoring |
| GitHub Actions | CI/CD |

---

## 🚀 Deployment

The application is deployed on AWS using a serverless architecture.

Frontend:

S3 → CloudFront

Backend:

API Gateway → Lambda → DynamoDB

Contact:

API Gateway → Lambda → DynamoDB → SES

Deployment automation:

GitHub → GitHub Actions → S3 → CloudFront
                                  ┌─────────────┐
                                  │     SES     │
                                  └─────────────┘
