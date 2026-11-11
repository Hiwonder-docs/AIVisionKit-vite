import { createApp } from 'vue'
import FeedbackWidget from './FeedbackWidget.vue'
import './feedback.css'

if (!document.getElementById('course-feedback-root')) {
  const root = document.createElement('div')
  root.id = 'course-feedback-root'
  document.body.appendChild(root)
  createApp(FeedbackWidget).mount(root)
}
