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

1. Checkout a feature branch. Stage, commit, and push to feature branch.
2. Pull from main branch.
3. Resolve merge conflicts.
4. Submit a pull request to the Git Keeper.
5. Git keeper merges the pull request to main.

---

## Store

- Recipes:
  - Array of objects.
  - Source is from the external API.
  - Content changes based on user input into the search form and their filters.
  - Build query string for external API based on user input.
  - UseParams to find the selected recipe and load the recipe details into the detailed view component.

---

## User stories

- [ ] See what vegetables/fruits are in season.
- [ ] Filter recipes based on the season.
- [ ] See the whole recipe after clicking on the recipe card
- [ ] Search recipe according to vege and/or fruits.

### Stretch

#### Navigation

- [ ] Able to navigate around the app seamlessly
- [ ] Able to hide the nav
- [ ] Filter options for vegetarian, vegan, gluten-free (and maybe some other options).
- [ ] Additional filters to recipes, e.g. cuisine.
- [ ] Favourites
- [ ] Display trending and most popular favourites
- [ ] Ratings
- [ ] Comments
- [ ] User photos

---

## Database

### produce

| Name   | Content                                                         |
| ------ | --------------------------------------------------------------- |
| id     | Unique ID for the fruit/vegetable                               |
| name   | Name of the fruit/vegetable                                     |
| type   | Type of the produce, i.e. fruit or vegetables                   |
| image  | Image of the fruit/vegetable                                    |
| season | An array of months that the produce is available in NZ (1 - 12) |

### produce_months

| Name       | Content                          |
| ---------- | -------------------------------- |
| ID         | Unique ID for the produce months |
| produce_id | ID referencing the produce table |
| month_id   | ID referencing the months table  |

### months

| Name       | Content                                         |
| ---------- | ----------------------------------------------- |
| ID         | Unique ID for the month                         |
| month_name | Name of the month, i.e. January, February, etc. |

### users

| Name       | Content                                                                                        |
| ---------- | ---------------------------------------------------------------------------------------------- |
| id         | Unique ID for the user                                                                         |
| auth0_id   | Auth0 ID for the user                                                                          |
| name       | Name for the user                                                                              |
| username   | The user's username                                                                            |
| favourites | Contains the users favourites <b> or </b>links to their favourites entry in a favourites table |

### favourites

| Name      | Content                                                            |
| --------- | ------------------------------------------------------------------ |
| user_id   | References the user's ID in the users table                        |
| recipe_id | ID for the recipe (<b>external API or internal recipes table?</b>) |

---

## Seasoned API

| METHOD | ENDPOINT          | USAGE                      | RETURNS                   |
| ------ | ----------------- | -------------------------- | ------------------------- |
| GET    | `/v1/produce`     | Get a list of all produce  | An array of produce       |
| POST   | `/v1/produce`     | Add a new produce          | The newly created produce |
| PATCH  | `/v1/produce/:id` | Update an existing produce | The updated produce       |
| DELETE | `/v1/produce/:id` | Delete an existing produce | Nothing (status OK)       |

| METHOD | ENDPOINT                 | USAGE                                       | RETURNS                 |
| ------ | ------------------------ | ------------------------------------------- | ----------------------- |
| GET    | `/v1/produce/:id/months` | Get a list of months for a specific produce | An array of months      |
| POST   | `/v1/produce/:id/months` | Add a new month to a specific produce       | The newly created month |
| DELETE | `/v1/produce/:id/months` | Delete a month from a specific produce      | Nothing (status OK)     |
