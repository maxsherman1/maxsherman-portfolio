# AI_CONTEXT.md

## Project Overview
**Name:** Max Sherman Portfolio  
**Framework:** Next.js 15.3.4  
**Language:** TypeScript (React 19)  
**Styling:** Tailwind CSS (with dark mode), shadcn/ui 
**Hosting:** Vercel (with CI/CD)  

This is a professional developer portfolio showcasing Max Sherman’s software engineering projects, skills, and contact capabilities.

---

## ⚙️ Technical Stack

| Category     | Technology Used |
|---------------|----------------|
| Frontend      | Next.js 15, React 19, TypeScript |
| Styling       | Tailwind CSS, dark mode support, shadcn components |
| Backend       | Next.js API Routes |
| Data          | JSON files (`/data/projects.json`, `/data/skills.json`) |
| Email System  | Nodemailer with Upstash rate limiting |
| State/Data    | SWR (with `PrefetchProvider` for caching) |
| Testing       | Unit + integration tests planned |
| Tools         | Git, JIRA, VS Code, PyCharm |
| Hosting       | Vercel with environment variables for secrets |

---

## Project Structure (Key Files)

```

/app
/api
/projects/route.ts        → Returns JSON list of projects
/skills/route.ts          → Returns JSON list of skills
/contact/route.ts         → Validates + sends email (Nodemailer + rate limit)
/contact/page.tsx
/projects/page.tsx
/about/page.tsx             → "About Me" and "Skills" page using SWR fetch
/layout.tsx                 → Root layout with global providers
/page.tsx                   → Homepage (introduction + featured projects)

/components
Footer.tsx
Navbar.tsx
PrefetchProvider.tsx        → Prefetches project/skills data into SWR cache
ProjectCard.tsx             → Reusable project card component

/data
projects.json               → Static project data
skills.json                 → Static skills grouped by category

/types
end.d.ts
index.ts                    → Shared TypeScript types (Project, SkillGroup)

```

---

## Key Features

- **Project Showcase:**  
  Responsive grid of projects with links to GitHub, live demos, and reports.

- **Skills Section:**  
  Six categorized skill groups with proficiency levels visualized as progress bars.

- **Contact Form:**  
  - POST `/api/contact` with Zod validation  
  - Email delivery via Nodemailer  
  - Rate-limited via Upstash Redis KV  
  - CORS-enabled response

- **Prefetching System:**  
  `PrefetchProvider` caches `/api/projects` and `/api/skills` in memory and configures SWR globally.

---

## API Endpoints

| Endpoint | Method | Description |
|-----------|---------|-------------|
| `/api/projects` | GET | Returns static project data |
| `/api/skills` | GET | Returns static skill data with caching headers |
| `/api/contact` | POST | Sends email (with rate limiting + validation) |

---

## Professional Highlights

- **Education:** First-Class Honours in Computer Science (University of Brighton)  
- **Experience:** Software Engineer (Jaguar Land Rover placement)  
- **Strengths:** Python, Java/Kotlin, React, Next.js, Git, JIRA  
- **Focus Areas:** Data analysis, visualization, web development