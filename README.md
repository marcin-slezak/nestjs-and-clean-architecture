## Intro

This example project was created to recognize the pros and cons of implementing clean architecture ([[🕸 About code architecture]]) concept in NestJs framework (and play around with [nx](https://nx.dev/) 🤭)


## Why

Some people are saying that each day, someone creates a new JavaScript framework. Indeed, the JavaScript community is creative. But, unfortunately, event best frameworks will not save us against poor code or application architecture that some developers seem to forget. 

## What

This example application allows collecting job applications. We have implemented two pages: 1) a list of available job positions and 2) an application form.


https://user-images.githubusercontent.com/35666945/137169501-bee1c092-3bd6-4074-96b6-15e941bf0bd6.mov


The rest of the functionalities (e.g. adding available jobs, list of applications) is available via REST API.

## How

Application is using two frameworks: [NextJs](https://nextjs.org/) on frontend and [NestJs](https://nestjs.com/) on backend. Both apps are wrapped by [nx](https://nx.dev/) in a monorepo. 

The app is using a SqlLite database (as it's only proof of concept, we don't need anything more), hover, because we are using [Typeorm](https://typeorm.io/) it should not be a big deal to use any other SQL database (e.g. Postgresql) 

## Clean architecture

To understand clean architecture, i suggest going through resources listed here: [[🕸 About code architecture]] 

I split code base to two folders:
- `apps/backend/src/app/domain` - contains domain logic (inner circle), including
	- `apps/backend/src/app/domain/entities` - entitites like `job-postition` or `job-applciation`
	- `apps/backend/src/app/domain/interfaces` - interfaces describing dependencies from outside of domain logic (e.g. storage repositories)
	- `apps/backend/src/app/domain/services` - domains services/domain use cases
- `apps/backend/src/app/infrastructure` - that contains application realted resources, including:
	- `apps/backend/src/app/infrastructure/config` - configuration
	- `apps/backend/src/app/infrastructure/controllers` - REST api controllers 
	- `apps/backend/src/app/infrastructure/db` - storage service implementing domain interface
	- `apps/backend/src/app/infrastructure/dto` - data trasfer objects that describes communication between frontend and backend server


The entry point for the application is the main NestJs module 'apps/backend/src/app/app.module.ts`, responsible for fulfilling all relationships and dependencies between domain and application. 


## Setup

- clone repository
- install node dependencies `npm run install`
- add configuration file `apps/frontend/.env.local` (for development purposes you can just copy `apps/frontend/.env.local.example`)
- run application in development mode `npm run dev`

## Conclusion

Keeping clean architecture rules brings some additional costs. By default, Typeorm can be configured directly on domain entities (via annotations). Complete separation suggested by clean architecture force on us:
- creating a separeted schema definitions: `apps/backend/src/app/infrastructure/db/schemas`
- writing custom repositiories (addapters) that wrap typeorm repositiories and  impelements domain interfaces `apps/backend/src/app/infrastructure/db/repositories`
- creating interfaces in a domain that describes API of external services that can be injected into domain `apps/backend/src/app/domain/interfaces`
- managing Dependency Injections, thankfully NestJs has an inbuild DI Container that help us with that a lot but still require some configuration `apps/backend/src/app/app.module.ts`


Even for such a small project like this one, it's over 12 additional files. Of course, it allows us to make magic with a domain (testing, portability, clean overview for complex business logic, swappable external services etc.). Still, it's overkill for CRUD applications where like here - we do not have business logic almost at all. 

Still, we can use the full power of modern frameworks like NestJS and use clean architecture rules to implement functionalities with complex business logic - getting the best from those two worlds. 

