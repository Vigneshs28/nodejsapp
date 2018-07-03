pipeline {
  agent any
  stages {
    stage('Build') {
      parallel {
        stage('Build') {
          steps {
            sh 'echo Build step 1'
          }
        }
        stage('Build Step 2') {
          steps {
            sh 'echo build step 2'
          }
        }
        stage('Build step 3') {
          steps {
            sh 'echo build step 3'
          }
        }
        stage('Build step 4') {
          steps {
            sh 'echo build step 4'
          }
        }
      }
    }
    stage('Test') {
      parallel {
        stage('Chrome') {
          steps {
            sh 'echo test on chrome'
          }
        }
        stage('mozilla') {
          steps {
            sh 'echo test on mozila'
          }
        }
      }
    }
    stage('Deploy To QA') {
      parallel {
        stage('Deploy To QA') {
          steps {
            sh 'echo Deploy to QA'
          }
        }
        stage('Run QA Test cases') {
          steps {
            sh 'echo Run QA test cases'
          }
        }
      }
    }
    stage('Deploy to Stage') {
      steps {
        sh 'echo deploy to stage server'
      }
    }
    stage('Deploy to Production') {
      steps {
        sh 'echo Deploy to production'
      }
    }
  }
}