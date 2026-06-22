/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface Project {
  id: string;
  title: string;
  description: string;
  techStack: string[];
  githubUrl?: string;
  demoUrl?: string;
  icon?: string;
}

export interface Skill {
  name: string;
  level: number; // 1-5 scale or percentage
  category: 'frontend' | 'backend' | 'design' | 'other';
}

export interface LearningMilestone {
  id: string;
  title: string;
  date: string;
  category: 'education' | 'coding' | 'life' | 'achievement';
  content: string;
  isCompleted: boolean;
}

export interface WorkoutExercise {
  id: string;
  name: string;
  sets: number;
  reps: string;
  notes?: string;
  completed?: boolean;
}

export interface WorkoutDay {
  id: string;
  dayName: string; // e.g., Thứ Hai, Thứ Ba
  workoutTitle: string; // e.g., Push Day, Cardio
  exercises: WorkoutExercise[];
  isRestDay: boolean;
}

export interface UserProfile {
  name: string;
  title: string;
  bio: string;
  email: string;
  github: string;
  facebook?: string;
  instagram?: string;
  skills: Skill[];
  projects: Project[];
}
