# Seasoned – The seasonal veggie recipe

---

## How are we feeling?

Slightly stressed but driven to want to see this project succeed, mostly feeling good and confident.

## Wellbeing?

As a group, most of us are sleeping pretty well. After a discussion around stress profiles, we mostly decided to ensure communication when we are feeling stressed, taking breaks is essential to our success. One way to mitigate this stress from happening is to acknowledge it openly and walk away for 5 - 10 mins.

## General needs and time commitments?

None of us have any overly critical work/life commitments. We will be coming into campus on saturday except for Brendan. Sunday will be a rest day.

Daily goals, work to tasks, and stay overtime if tasks are not yet completed. This expectation should enable us to stay on track, sticking to our timeline.
The timeline will be on a whiteboard and have clear technology, tasks and expectations for the day.

Regular stand-ups and discussions around the task-flow. At least every 2 hours.

## Conflict and communication

An odd number makes it easier to make decisions through voting. If a conflict arises, the topic will be broken down and mediated with the success of the project at the center.
Task-based approach.

## What do we want to get out of this time?

A useful outcome to showcase at interviews and for our portfolios. Experience working in a group, and practicing human skills. Getting some fun out of the experience.

## Paper scissors rock

When making decisions as a group, it might be a good idea to use an external factor to make the decisions. Also showing evidence/rationale of your ideas during group talks. Give an example.

## Where do we go to find help?

Google, facilitators, each other.

## Inclusivity

To ensure inclusion we will be passively mindful of each other's needs/moods.

## Conversations

Based on the user stories and the pairs we will decide who needs to be present.

## Roles

Git Keeper: Pei
Vibe Water: Ash, Brendan
Scrum Lead: Tomas
Product owner: Zin
Design lead: Ash

## Chill time

Socialize, eat together, music and honey time. (on toast)

---

## Tech

- React
- Redux
- SQLite3
- Figma
- Material UI ('Mui')
- External API - https://developer.edamam.com/edamam-docs-recipe-api
- Auth0

---

## GitFlow

1. Checkout a feature branch. Stage, commit, and push to feature branch - <em>regularly</em>.
2. Pull from <b>main branch</b>.
3. Resolve merge conflicts.
4. Submit a pull request to the <b>dev branch</b>.
5. Pull request from <b>dev branch</b> into main is reviewed by the team and our wonderful volunteer reviewer.
6. Git keeper merges reviewed pull request to <b>main branch</b>.
7. Deployment to Heroku from main.

---

## Store

- Recipes:
  - Array of objects.
  - Source is from the external API.
  - Content changes based on user input into the search form and their filters.
  - Build query string for external API based on user input.
  - UseParams to find the selected recipe and load the recipe details into the detailed view component.

---

## Completed user stories

- [x] See what produce is in season.
- [x] See the whole recipe after clicking on the recipe card.
- [x] Search recipe according to vege and/or fruits.
- [x] Able to navigate around the app seamlessly.
- [x] Able to login/logout with Auth0.
- [x] Filter options for vegetarian, vegan, gluten-free.
- [x] Filter options for meal type, i.e. breakfast, lunch, dinner.
- [x] Display details to recipes, e.g. cuisine.
- [x] Favourites.
- [x] To do list.

### Stretch

#### TODO: user stories

- [ ] User recipe ratings
- [ ] Autocomplete search form with in-season produce
- [ ] Filter recipes based on the season.
- [ ] Additional nav options that can be shown/hidden
- [ ] Display trending and most popular favourites
- [ ] Comments
- [ ] User photos

---

## Database

### produce

| Name         | Content                                                                                    |
| ------------ | ------------------------------------------------------------------------------------------ |
| id           | Unique ID for the fruit/vegetable                                                          |
| name         | Name of the fruit/vegetable for use with the external API                                  |
| display_name | Name of the fruit/vegetable for use on Seasoned, includes the Maori word (where available) |
| type         | Type of the produce, i.e. fruit or vegetables                                              |
| image        | Image of the fruit/vegetable <b>TODO: switch to open-source images</b>                     |

### produce_available_months

Each entry is in this table is a month that the produce is available in New Zealand. Additional tables could be added to track the other types of seasonality: available (imported), limited supply, limited supply (imported), and unavailable.

For an example of this, see: https://www.produce.co.nz/seasonality-chart/

| Name       | Content                          |
| ---------- | -------------------------------- |
| ID         | Unique ID for the produce months |
| produce_id | ID referencing the produce table |
| month_id   | ID referencing the months table  |

### users

| Name       | Content                                                               |
| ---------- | --------------------------------------------------------------------- |
| auth0_id   | Auth0 ID for the user                                                 |
| username   | The user's chosen username (must be unique)                           |
| created_at | When the record was created                                           |
| updated_at | When the record was last updated <b>TODO: add this functionality.</b> |
| name       | The user's name, added from Auth0                                     |
| email      | The user's email, added from Auth0                                    |
| image      | The user's avatar, default is a Gravatar that's generated on sign-up  |

### favourites (stretch)

| Name     | Content                                                                   |
| -------- | ------------------------------------------------------------------------- |
| id       | id for the favourite                                                      |
| auth0_id | References the user's ID in the users table                               |
| rating   | The user's rating for the favourite TODO: complete this feature           |
| done     | Boolean which functions as a to-do toggle for the user                    |
| url      | Link to the full recipe on an external website (the source of the recipe) |
| label    | The name of the recipe                                                    |

---

## Seasoned API

### produce

| METHOD | ENDPOINT          | USAGE                      | RETURNS                    |
| ------ | ----------------- | -------------------------- | -------------------------- |
| GET    | `/v1/produce`     | Get a list of all produce  | An array of produce        |
| POST   | `/v1/produce`     | Add a new produce          | The newly created produce  |
| PATCH  | `/v1/produce/:id` | Update an existing produce | The updated produce        |
| DELETE | `/v1/produce/:id` | Delete an existing produce | The number of rows deleted |

### produce_available_months

| METHOD | ENDPOINT            | USAGE                                         | RETURNS                        |
| ------ | ------------------- | --------------------------------------------- | ------------------------------ |
| GET    | `/v1/available/`    | Get all availability of produce               | An array of availability       |
| POST   | `/v1/available/`    | Add a new availability for a produce          | The newly created availability |
| PATCH  | `/v1/available/`    | Update an existing availability for a produce | The updated availability       |
| DELETE | `/v1/available/:id` | Delete an availability by id                  | The number of rows deleted     |

| METHOD | ENDPOINT                       | USAGE                                    | RETURNS                                                                                                                                                              |
| ------ | ------------------------------ | ---------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| GET    | `/v1/available/month/:id`      | Get all availability with the same month | An array of availability for that month with name, display_name, and image_url                                                                                       |
| GET    | `/v1/available/produce/:id`    | Get all availability for a produce       | An array of availability for that produce with name, display_name, and image_url (or an empty array and 200 status okay if there's no availability for that produce) |
| GET    | `/v1/available/season/:season` | Get all availability for a season        | An array of availability for that season with name, display_name, and image_url                                                                                      |

### favourites

| METHOD | ENDPOINT                            | USAGE                                              | RETURNS                                     |
| ------ | ----------------------------------- | -------------------------------------------------- | ------------------------------------------- |
| GET    | `/api/v1/favourites`                | All favourites                                     | All favourites                              |
| GET    | `/api/v1/favourites/:id`            | A a favourite by ID                                | The row for a single favourite              |
| GET    | `/api/v1/favourites/user/:auth0_id` | Get all favourites for a user using their auth0_id | An array with all of that user's favourites |
| POST   | `/api/v1/favourites`                | Create a new favourite                             | The ID of the new favourite                 |
| PATCH  | `/api/v1/favourites/:id`            | Update a favourite                                 | The row of the updated favourite            |
| DELETE | `/api/v1/favourites`                | Delete a favourite                                 | The number of rows deleted                  |
