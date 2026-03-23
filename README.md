# Quiz app

A frontend quiz application built with React.

## Getting Started

### Clone the repository

```bash
git clone <repository-url>
```

### Local Development Setup

#### Frontend

```bash
cd statistikaamet-task-2026
npm install
npm run dev
```

#### **Access the application**:

- **Frontend**: [http://localhost:5173](http://localhost:5173)

#### Tests

To run Playwright tests

```bash
npx playwright test
```

this runs tests on all three most used browsers. If a test fails, a webpage displaying all the ran test will be opened automatically.
Do open the page manually

```bash
npx playwright show-report
```

### Features

- **Instant feedback**: Displays user questions with instant feedback, either the question was correct or wrong
- **Persists current question**: Remembers users current question and persists it on refersh or after reopening tab
- **End result**: Display overall score and result of each question at the end
- **Responsive Design**: Works on desktop and mobile devices
