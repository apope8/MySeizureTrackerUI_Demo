# My Seizure Tracker - Angular Client

This application is an Angular Client built to be used with the "My Seizure Tracker" Spring Boot Rest Service.

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 6.0.8.




## Running Locally

Currently this application is set to run on heroku and as such points at the Spring Boot Rest Service running on heroku. If you would like to run this against a locally running Spring Boot application the following must be changed.

### Seizure Service

- Go to src/app/seizure.service.ts
- Change seizuresURL from `https://mstrest.herokuapp.com/seizures` to `http://localhost:8080/seizures`

### Medication Service

- Go to src/app/medication.service.ts
- Change medicationUrl from `https://mstrest.herokuapp.com/medications` to `http://localhost:8080/medications`

### Charts Service

- Go to src/app/type-chart.service.ts
- There are 3 different URLs in this file
- For each change `mstrest.herokuapp.com` to `localhost:8080`

### Auth0 Service

- Go to src/app/auth.service.ts
- Change the redirectUri from `https://myseizuretracker.herokuapp.com/` to `http://localhost:4200/`




## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

<!-- ## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md). -->
