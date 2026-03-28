# MyTask Quiz App

A modern, interactive quiz application built with Next.js, designed to test your knowledge across various subjects.

## Features

- **Multiple Subjects**: Take quizzes on different topics
- **Customizable Question Count**: Choose the number of questions per quiz
- **Real-time Progress Tracking**: Visual progress bar showing current question and completion percentage
- **Instant Feedback**: Immediate feedback on correct/incorrect answers
- **Score Tracking**: Track correct answers and wrong attempts
- **Responsive Design**: Works seamlessly on desktop and mobile devices
- **Smooth Animations**: Enhanced user experience with Framer Motion animations

## Tech Stack

- **Framework**: Next.js 16 with App Router
- **Language**: TypeScript
- **State Management**: Zustand
- **Data Fetching**: TanStack React Query
- **HTTP Client**: Axios
- **UI Components**: Shadcn/ui with Radix UI
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React

## Getting Started

### Prerequisites

- Node.js 18+
- npm, yarn, pnpm, or bun

### Installation

1. Clone the repository:
```bash
git clone https://github.com/sohit-mishra/EdzyHackathon_TaskThird.git
cd mytask
```

2. Install dependencies:
```bash
npm install
# or
yarn install
# or
pnpm install
```

3. Start the development server:
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Usage

1. **Home Page**: Select a subject and number of questions
2. **Quiz Page**: Answer questions with multiple choice options
3. **Feedback**: See immediate feedback after each answer
4. **Results**: View your final score and wrong attempts
5. **Restart**: Take another quiz anytime

## Project Structure

```
├── app/                    # Next.js app directory
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout
│   ├── page.tsx           # Home page
│   ├── quiz/              # Quiz pages
│   │   ├── page.tsx       # Quiz taking page
│   │   └── result/        # Results page
│   └── not-found.tsx      # 404 page
├── components/            # Reusable components
│   ├── common/            # Common components (Loader, Error, etc.)
│   ├── quiz/              # Quiz-specific components
│   └── ui/                # UI components from shadcn
├── hooks/                 # Custom React hooks
├── lib/                   # Utility libraries
├── store/                 # Zustand state management
├── types/                 # TypeScript type definitions
├── api/                   # API configuration and calls
└── services/              # Business logic services
```

## API Integration

The app integrates with a quiz API that provides questions based on:
- Subject selection
- Number of questions requested

API Endpoint: `/task-1/quizDetails`
- Method: POST
- Body: `{ examSubjectName: string, numberOfQuestions: number }`

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Run tests and linting
5. Submit a pull request

## License

This project is licensed under the MIT License.

## Acknowledgments

- Built with [Next.js](https://nextjs.org)
- UI components from [shadcn/ui](https://ui.shadcn.com)
- Icons from [Lucide](https://lucide.dev)


