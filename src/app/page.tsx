'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  ClipboardDocumentListIcon,
  ComputerDesktopIcon,
  ClockIcon,
  UserIcon,
  GlobeAltIcon,
  ChartBarIcon,
  WrenchScrewdriverIcon,
  CloudIcon
} from '@heroicons/react/24/outline';
import { Breadcrumb } from '@/components/Breadcrumb';
import { Button } from '@/components/Button';
import { FeatureCard } from '@/components/FeatureCard';

const features = [
  {
    icon: ComputerDesktopIcon,
    text: 'Designed for QA professionals moving into ML',
    color: 'bg-blue-100 text-blue-600'
  },
  {
    icon: UserIcon,
    text: 'Gentle explanations in clear, everyday language',
    color: 'bg-emerald-100 text-emerald-600'
  },
  {
    icon: ClipboardDocumentListIcon,
    text: 'Step-by-step labs with ready-made checklists',
    color: 'bg-purple-100 text-purple-600'
  },
  {
    icon: ClockIcon,
    text: '12-week journey with flexible weekly goals',
    color: 'bg-orange-100 text-orange-600'
  },
  {
    icon: GlobeAltIcon,
    text: 'Realistic projects drawn from QA workflows',
    color: 'bg-rose-100 text-rose-600'
  },
  {
    icon: ChartBarIcon,
    text: 'Portfolio-ready assets for junior ML roles',
    color: 'bg-indigo-100 text-indigo-600'
  }
];

const learningJourney = [
  {
    title: 'Mindset Shift: From Testing to Teaching Machines',
    duration: 'Week 1',
    summary:
      'Understand what changes when you move from finding bugs to building intelligent helpers.',
    takeaways: [
      'Map your existing QA strengths to ML responsibilities.',
      'Learn core vocabulary: features, labels, training, evaluation.',
      'Set up a realistic study schedule with dedicated practice blocks.'
    ]
  },
  {
    title: 'Python for Testers',
    duration: 'Weeks 2-3',
    summary:
      'Learn enough Python to read, tweak, and write automation-friendly ML scripts.',
    takeaways: [
      'Use Jupyter notebooks to prototype ideas and document experiments.',
      'Master data structures (lists, dictionaries, NumPy arrays) by comparing them to test data tables.',
      'Practice writing tidy, well-commented helper functions for reproducible runs.'
    ]
  },
  {
    title: 'Data Literacy & Storytelling',
    duration: 'Weeks 4-5',
    summary:
      'Turn raw logs, CSV files, and manual notes into model-ready datasets.',
    takeaways: [
      'Collect, label, and version data with simple checklists and naming rules.',
      'Visualize trends with pandas and Matplotlib to spot quality issues early.',
      'Split data into training, validation, and testing sets with purpose.'
    ]
  },
  {
    title: 'Core Machine Learning Concepts',
    duration: 'Weeks 6-8',
    summary:
      'Build intuition for models you will support: linear models, trees, clustering, and neural nets.',
    takeaways: [
      'Understand loss functions as “how wrong” the model is allowed to be.',
      'Track metrics such as accuracy, precision, recall, and F1 the same way you track defect rates.',
      'Practice experiment logs, hyperparameter tweaks, and compare results responsibly.'
    ]
  },
  {
    title: 'Project Delivery & MLOps Basics',
    duration: 'Weeks 9-10',
    summary:
      'Move from a working notebook to a maintainable pipeline using cloud-first habits.',
    takeaways: [
      'Organize code, data, and documentation so teammates can reuse your work.',
      'Automate testing with unit tests, data quality checks, and regression suites.',
      'Monitor models with dashboards that alert you when reality drifts.'
    ]
  },
  {
    title: 'GCP Deployment & Debugging',
    duration: 'Weeks 11-12',
    summary:
      'Package, deploy, and troubleshoot models using Google Cloud Platform.',
    takeaways: [
      'Containerize your service with Cloud Run or Vertex AI endpoints.',
      'Use Cloud Logging, Cloud Monitoring, and Vertex AI Model Registry for observability.',
      'Practice rollback and incident response drills to build confidence.'
    ]
  }
];

const projectSteps = [
  {
    step: 'Plan the Use Case',
    details:
      'Pick a quality-related decision you already know well—for example, flagging flaky UI test runs that usually break nightly builds.'
  },
  {
    step: 'Build a Lightweight Dataset',
    details:
      'Export the last three months of test results, keep columns such as suite name, browser, run duration, final status, and attach a human label “flaky” or “stable”. Store the CSV in a versioned /data folder.'
  },
  {
    step: 'Create Training, Validation, and Test Splits',
    details:
      'Use an 70/15/15 split. Keep runs from the same day together to avoid leaking future knowledge into the training set.'
  },
  {
    step: 'Train and Evaluate the Model',
    details:
      'Start with a logistic regression classifier. Track precision and recall to be sure flaky runs are caught without flooding the team with false alarms.'
  },
  {
    step: 'Fine-tune and Document',
    details:
      'Adjust regularization strength, try different feature combinations, and save experiment notes in a markdown log. Highlight the configuration that gives the best balance of metrics.'
  },
  {
    step: 'Package for the Cloud',
    details:
      'Wrap the model in a FastAPI service. Create a Dockerfile and test it locally. Push the image to Artifact Registry and deploy using Cloud Run or Vertex AI Predictions.'
  }
];

const pythonSnippet = `import pandas as pd
from sklearn.model_selection import train_test_split
from sklearn.preprocessing import OneHotEncoder
from sklearn.compose import ColumnTransformer
from sklearn.linear_model import LogisticRegression
from sklearn.pipeline import Pipeline

# 1. Load and inspect the dataset
runs = pd.read_csv("data/flaky_runs.csv")
print(runs.head())

# 2. Separate features and labels
y = runs.pop("label")
X = runs

# 3. Define preprocessing for mixed data types
categorical_cols = ["suite", "browser"]
numeric_cols = ["duration_minutes", "retry_count"]

preprocess = ColumnTransformer(
    transformers=[
        ("cat", OneHotEncoder(handle_unknown="ignore"), categorical_cols),
        ("num", "passthrough", numeric_cols),
    ]
)

# 4. Build the training pipeline
model = Pipeline(
    steps=[
        ("prep", preprocess),
        ("clf", LogisticRegression(max_iter=500))
    ]
)

X_train, X_temp, y_train, y_temp = train_test_split(
    X, y, test_size=0.3, stratify=y, random_state=42
)

X_valid, X_test, y_valid, y_test = train_test_split(
    X_temp, y_temp, test_size=0.5, stratify=y_temp, random_state=42
)

model.fit(X_train, y_train)
print("Validation precision:", model.score(X_valid, y_valid))
print("Test precision:", model.score(X_test, y_test))`;

const toolkit = {
  environment: [
    'VS Code with the Python and Jupyter extensions installed.',
    'Conda or pyenv for managing isolated environments.',
    'GitHub repository template with folders for /data, /notebooks, /src, and /docs.'
  ],
  debugging: [
    'Use VS Code breakpoints and the interactive debugger to inspect tensors and data frames.',
    'Leverage Jupyter “Run cell and debug” for step-by-step execution.',
    'Profile long-running jobs with cProfile or the built-in Jupyter performance tools.'
  ],
  gcp: [
    'Enable Vertex AI, Cloud Build, Artifact Registry, and Cloud Logging in a dedicated project.',
    'Create service accounts with least-privilege roles for training, deployment, and monitoring.',
    'Use Cloud Build triggers connected to GitHub for automated training and deployment pipelines.'
  ]
};

const supportTips = [
  {
    title: 'Troubleshooting Checklist',
    bullets: [
      'If a notebook will not run, confirm the active Python environment and reinstall requirements.txt.',
      'When model metrics collapse, examine the latest data batch for schema drifts or mislabeled rows.',
      'Check Cloud Logging for deployment errors and keep a standard runbook for common fixes.'
    ]
  },
  {
    title: 'Practice Like a Real Team',
    bullets: [
      'Conduct mini retrospectives after each module to capture lessons learned.',
      'Pair-program during labs so manual testers and automation specialists learn from each other.',
      'Rotate “on-call” duties for the demo environment to build operational awareness.'
    ]
  },
  {
    title: 'Keep Growing After the Course',
    bullets: [
      'Contribute to open datasets or Kaggle competitions related to testing and reliability.',
      'Shadow senior ML engineers to understand production monitoring rituals.',
      'Join community meetups and share your project story to build a professional network.'
    ]
  }
];

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <Breadcrumb
        items={[
          { label: 'Home', href: '/', active: true },
          { label: 'Crash Course', href: '/crash-course' }
        ]}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <section className="py-20 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl font-bold text-gray-900 mb-6"
          >
            Machine Learning Career Jumpstart for Test Engineers
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-gray-600 max-w-3xl mx-auto mb-12"
          >
            Move from verifying software to designing intelligent teammates. This guided program is for
            manual and automation testers who want to grow into confident junior machine learning engineers.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-20"
          >
            <Button href="/modules" variant="primary" size="lg">
              Explore the 12-Week Roadmap
            </Button>
            <Button href="/prerequisites" variant="secondary" size="lg">
              Review Starter Skills
            </Button>
            <Button href="/crash-course" variant="secondary" size="lg">
              Download the Lab Handbook
            </Button>
          </motion.div>
        </section>

        <section className="py-16">
          <div className="bg-gray-50 rounded-2xl p-8 sm:p-12">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.text}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 + index * 0.1 }}
                >
                  <FeatureCard
                    icon={feature.icon}
                    text={feature.text}
                    color={feature.color}
                  />
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-3xl font-semibold text-gray-900 mb-6 text-center"
          >
            Your Learning Journey
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-lg text-gray-600 max-w-4xl mx-auto text-center mb-10"
          >
            Each module blends short theory sessions, comparison tables that relate ML ideas to familiar testing
            concepts, and guided labs that end with a short demo video. Expect weekly check-ins and a final
            showcase where you present your project like a real engineering handoff.
          </motion.p>
          <div className="grid gap-6 md:grid-cols-2">
            {learningJourney.map((stage, index) => (
              <motion.div
                key={stage.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 + index * 0.1 }}
                className="border border-gray-200 rounded-2xl p-6 bg-white shadow-sm"
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-semibold text-indigo-600 uppercase tracking-wide">
                    {stage.duration}
                  </span>
                  <WrenchScrewdriverIcon className="h-6 w-6 text-gray-400" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{stage.title}</h3>
                <p className="text-gray-600 mb-4">{stage.summary}</p>
                <ul className="list-disc pl-5 space-y-2 text-gray-600">
                  {stage.takeaways.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </section>

        <section className="py-16">
          <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-sm">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-3xl font-semibold text-gray-900 mb-6 text-center"
            >
              Capstone Project: Flaky Test Run Classifier
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-lg text-gray-600 max-w-4xl mx-auto text-center mb-10"
            >
              This project reflects day-to-day testing pain points. You will learn how to collect trustworthy
              data, train and fine-tune a model, and deploy it to the cloud so your team can consume predictions
              in dashboards or automated pipelines.
            </motion.p>
            <div className="grid gap-6 md:grid-cols-2">
              {projectSteps.map((item, index) => (
                <motion.div
                  key={item.step}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 + index * 0.1 }}
                  className="rounded-xl bg-gray-50 p-6 border border-gray-200"
                >
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{item.step}</h3>
                  <p className="text-gray-600">{item.details}</p>
                </motion.div>
              ))}
            </div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="mt-10"
            >
              <h3 className="text-2xl font-semibold text-gray-900 mb-4 text-center">
                Sample Notebook Snippet
              </h3>
              <p className="text-gray-600 max-w-3xl mx-auto text-center mb-6">
                Reproduce this pipeline in a Jupyter notebook, explain every step in plain language, and capture
                screenshots as evidence for your hiring portfolio.
              </p>
              <pre className="bg-gray-900 text-gray-100 text-sm p-6 rounded-xl overflow-x-auto">
                <code>{pythonSnippet}</code>
              </pre>
            </motion.div>
          </div>
        </section>

        <section className="py-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-3xl font-semibold text-gray-900 mb-6 text-center"
          >
            Build Your Professional Toolkit
          </motion.h2>
          <div className="grid gap-8 md:grid-cols-3">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="rounded-2xl bg-white border border-gray-200 p-6 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-3">
                <ComputerDesktopIcon className="h-7 w-7 text-indigo-500" />
                <h3 className="text-xl font-semibold text-gray-900">Local Environment</h3>
              </div>
              <ul className="list-disc pl-5 space-y-2 text-gray-600">
                {toolkit.environment.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="rounded-2xl bg-white border border-gray-200 p-6 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-3">
                <WrenchScrewdriverIcon className="h-7 w-7 text-emerald-500" />
                <h3 className="text-xl font-semibold text-gray-900">Debugging Habits</h3>
              </div>
              <ul className="list-disc pl-5 space-y-2 text-gray-600">
                {toolkit.debugging.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="rounded-2xl bg-white border border-gray-200 p-6 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-3">
                <CloudIcon className="h-7 w-7 text-sky-500" />
                <h3 className="text-xl font-semibold text-gray-900">GCP Production Flow</h3>
              </div>
              <ul className="list-disc pl-5 space-y-2 text-gray-600">
                {toolkit.gcp.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </motion.div>
          </div>
        </section>

        <section className="py-16">
          <div className="bg-indigo-50 border border-indigo-100 rounded-2xl p-8 shadow-sm">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-3xl font-semibold text-indigo-900 mb-6 text-center"
            >
              Stay Supported
            </motion.h2>
            <div className="grid gap-6 md:grid-cols-3">
              {supportTips.map((tip, index) => (
                <motion.div
                  key={tip.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 + index * 0.1 }}
                  className="rounded-2xl bg-white border border-indigo-100 p-6 shadow-sm"
                >
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{tip.title}</h3>
                  <ul className="list-disc pl-5 space-y-2 text-gray-600">
                    {tip.bullets.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-3xl font-semibold text-gray-900 mb-6"
          >
            Ready to take the next step?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-lg text-gray-600 max-w-2xl mx-auto mb-8"
          >
            Join the next cohort, bring your testing experience, and leave with a deployable machine learning
            project plus a hiring story that highlights your strengths.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <Button href="/apply" variant="primary" size="lg">
              Apply for the Cohort
            </Button>
            <Button href="/crash-course" variant="secondary" size="lg">
              Preview the Curriculum
            </Button>
            <Link
              href="mailto:hello@mljumpstart.io"
              className="text-indigo-600 hover:text-indigo-500 text-base font-medium"
            >
              Ask a question
            </Link>
          </motion.div>
        </section>
      </div>
    </div>
  );
}
