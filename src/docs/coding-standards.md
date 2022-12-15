# Coding Standards Used for Marketplace App Front-End

We will use following coding standards for marketplace app.

## Components development and page design

### Common conventions and guidelines for project.

1. All the files names start with small letter and follows the camel case convention.
2. All the stylesheets are named with the same convention.
3. All the standard typescripts conventions has to be followed.
4. Code comments should be written in English and with clear definition and Tags like TODO, INFO, DEPRECATED with Date and anem timestanp.
5. All the code should be linted and type checked before pushing to the repository.

### Components and Page Design

1. All the Common components will be developed in the `<root>/components` directory.
2. All the page components will be developed in the `<root>/pages` directory.
3. All the components naming convention will be `<ComponentName>.component.ts`.

### Styling

1. All the styles should be used from helper class of tailwind.
2. In case of some custom css it would be written inside the `<root>/styles` directory.
3. Styles naming convention should be `<style-name>.module.(css/scss)`.

### Utilities, Services, redux, etc.

1. All the utilities will be developed in the `<root>/utils` directory.
2. All the libraries will be developed in the `<root>/lib` directory.
3. All the redux components should be written in the `<root>/redux` directory.
4. All the services will be developed in the `<root>/services` directory.
5. All the services naming convention should be `<service-name>.service.ts`.

### linting code conventions and standards

1. We follow strict linting conventions and standards as per Eslint (Airbnb standards).
2. We use Prettier for code formatting configuration is mentinoned in .prettierrc.

### Code Contributing to the project

1. All the new development has to be done from new branch.
2. Branch naming conventions should be as follow:
   1. Feature: `feature/<feature-name>`.
   2. Bugfix: `bugfix/<bugfix-name>`.
   3. Documentation: `docs/<documentation-name>`.
   4. refractoring: `refactor/<refactor-name>`.
   5. Release: `release/<release-name>`.
3. Code has to be reviewed by the team before pushing to the main branch of the repository.
