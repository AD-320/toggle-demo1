# Feature Toggle Demo

This project demonstrates a simple implementation of a "Feature Toggle" component in React. The purpose of this component is to enable or disable features within your application dynamically, based on props passed to it. This approach helps in managing feature releases and testing in production environments without the need for deploying code changes.

## Getting Started

To run this project locally, clone the repository and install the dependencies.

### Prerequisites

- Node.js
- npm or yarn

### Installation

Clone the repo
```
git clone https://github.com/AD-320/toggle-demo.git
```
Navigate to the project directory
```
cd feature-toggle-demo
```
Install NPM packages
```
npm install
```
## Running the Application
To start the application, run the following command in the project directory:
```
npm start
```
## Usage
The FeatureToggle component controls the rendering of features based on the isEnabled prop. Here's a simple example of how to use it in your application:
```
<FeatureToggle isEnabled={true} featureName="New Dashboard" />
<FeatureToggle isEnabled={false} featureName="Beta Feature" />
```
