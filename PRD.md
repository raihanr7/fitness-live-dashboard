# Product Requirements Document (PRD)

## Project Name: Dashboard Performance (Personal Running Hub)
**Author:** Raihan Rizqullah Eko Wijayanto  
**Status:** In Development  
**Tech Stack:** Next.js 14 (App Router), Tailwind CSS, NextAuth.js, Recharts, Lucide React  

---

## 1. Project Overview & Objectives
The goal of this project is to develop a premium, personalized, web-based performance dashboard to track running dynamics and long-term health metrics. The system will eliminate third-party fitness middleware (like Google Fit) and pull data asynchronously (Post-Workout Batch Fetching) directly from the **Huawei Health Kit REST API**.

The ultimate objective is to provide a clean visual interface for analyzing physiological adaptations to training over time, optimized for personal usage and private sharing.

---

## 2. Target User & Core Use Case
- **User Persona:** An endurance runner tracking performance progression and recovery markers for event preparation (e.g., a 10K running event).
- **Core Use Case:** After finishing a running session, the wearable syncs data to the Huawei Health app. The user then opens this custom web dashboard to view advanced metric correlations (Pace vs. Heart Rate Reserve trends, Cadence efficiency, and Sleep/SpO2 recovery impacts) visualized through line graphs.

---

## 3. Telemetry Pipeline & Data Flow
Sistem menggunakan metode asinkron (Post-Workout). Data dari Huawei Wearable masuk ke Huawei Health App, lalu dikirim ke Huawei Cloud, kemudian ditarik oleh Next.js Backend via API Routes menggunakan Huawei Health Kit REST API (OAuth 2.0). Data akhir disajikan ke Live Web Dashboard UI dan diekspos ke AI Page Server Client via MCP Protocol.

---

## 4. Functional Requirements

### Phase 1: Huawei ID Authentication & Security
- **FR-1.1:** Secure user authentication using Huawei ID OAuth 2.0 protocol implemented via custom NextAuth.js configuration.
- **FR-1.2:** Request explicit read permissions for the following Huawei Health Kit data scopes:
  - `https://www.huawei.com/healthkit/activity.read` (Workouts, Pace, Distance, Steps, Cadence)
  - `https://www.huawei.com/healthkit/heartrate.read` (BPM, Avg HR, VO2Max)
  - `https://www.huawei.com/healthkit/biometrics.read` (Sleep, SpO2, Body Weight)
- **FR-1.3:** Secure token storage: All `Client Secrets`, `Access Tokens`, and `Refresh Tokens` must be handled strictly on the server-side via Vercel Environment Variables.

### Phase 2: Post-Workout Batch Processing & Metrics
- **FR-2.1:** Pull data in batches *post-workout* based on finalized `ActivityRecord` sessions. No real-time GPS tracking or active streaming overhead is required.
- **FR-2.2:** Parse and standardize raw Huawei data into running dynamics:
  - **Running Pace:** Formatted explicitly as `minutes:seconds per kilometer` (e.g., `05:30/km`).
  - **Cadence:** Formatted as Steps Per Minute (SPM). Target optimization metric set to 170-180 SPM.
  - **Cardio Effort:** Calculate and display time spent in specific **Heart Rate Reserve (HRR)** aerobic zones based on resting and maximum HR.
  - **Health Metrics:** Historical trend compilation for Daily Sleep Quality (Hours/Deep Sleep %), Body Weight (kg), SpO2 (%), and VO2Max.

### Phase 3: Visualizations & AI Integrations
- **FR-3.1:** Display an interactive historical trend dashboard utilizing a dark-mode "Midnight Stealth" theme built with Tailwind CSS.
- **FR-3.2:** Render smooth, responsive **Line Graphs** using `recharts` to view metric fluctuations over weekly, monthly, and 6-month intervals.
- **FR-3.3:** Expose structured endpoints compatible with MCP (Model Context Protocol) to allow the AI Page client to query exercise logs via natural language.

---

## 5. Non-Functional Requirements
- **Data Integrity:** Gracefully handle missing or null data fields (e.g., if SpO2 wasn't tracked on a certain day) by displaying standard dashed indicators (`--`) instead of crashing the UI.
- **Performance:** Pre-render static UI shells and fetch heavy Huawei datasets asynchronously to keep initial page loading under 2 seconds.
- **Privacy:** Implement a simple query parameter or toggle to allow the user to password-protect or restrict public visibility when sharing the dashboard link with others...
