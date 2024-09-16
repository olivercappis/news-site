# YouNews

A dynamic news website that allows users to create personalized news feeds based on their preferences. Users can search for articles, browse global news, and customize their experience by selecting preferred categories. This project is built with user experience in mind, providing seamless navigation and an engaging interface for discovering news.

# Authors
[Oliver Cappis](https://github.com/olivercappis)

[Conor Lee](https://github.com/Conorlee8)

[Christopher Romero](https://github.com/ChrisRome00)

## Link To Application
https://news-site-e1nl.onrender.com/

## Features

- **User Profiles**: 
  - Users can sign up, create a profile, and log in to access personalized features.
  - User authentication ensures a secure experience for each session.

- **Preferred Categories**:
  - Users can choose preferred news categories to customize their feed.
  - The selected categories will display tailored content in the user's feed.
  - Easily manage preferences through the settings page, where categories can be added or removed in real time.

- **Global News**: 
  - Stay up-to-date with the latest news worldwide via the global news tab.
  - The global news section covers top stories across all categories.

- **Search Functionality**:
  - A search bar allows users to find articles by keyword.
  - Search results include news articles across all available categories.

## Technologies Used

Frontend: React, JSx, CSS

Backend: Node.js, GraphQL, Apollo

Database: MongoDB

Authentication: JWT (JSON Web Tokens)

API: The News API

## User Stories

User Story 1: Global Landing Page (Before Login) As a visitor, I want to land on the global YouNews page and see a general selection of top news (e.g., World News, Tech, Stocks, Sports) without needing to log in. As a visitor, I want to be able to browse the top news categories before deciding to log in or sign up. As a user, after logging in, I want to be redirected from the global landing page to my personalized landing page, which displays the news widgets I have selected or removed based on my preferences.

User Story 2: Sign-Up and Login As a user, I want to sign up and log in so I can save my personalized news dashboard preferences.

User Story 3: Customizable Widgets As a user, I want to choose from a variety of widgets (e.g., sports, tech, world news, weather) and arrange them on my dashboard. As a user, I want to easily add or remove widgets as my interests change. User Story 4: News Preferences

User Story 4: As a user, I want to choose specific news categories (e.g., technology, entertainment, finance) so my dashboard shows news based on my preferences.

User Story 5: Real-Time News Updates As a user, I want the widgets to update with the latest news in real-time so I can always stay informed.

Acceptance Criteria:
1. Global Landing Page (Before Login):
    Grid of top news (World, Tech, Sports, etc.).
    Navigation: "Login" and "Sign Up."
    Visitors browse news without logging in.
    Redirects to personalized page after login.
2. Sign-Up and Login Page:
    Users sign up with email/password or log in.
    Redirects to personalized page.
    Error handling for invalid credentials.
3. Personalized Landing Page (After Login):
    Displays user-selected widgets.
    Layout saved and persistent.
4. Customizable Widgets in Settings:
    Users customize widgets (News, Weather, Sports).
    Preferences are saved and reflected.
5. Real-Time News Updates:
    Widgets auto-refresh with real-time news.
    Clicking opens articles in new tab.
    Widgets update based on preferences.
6. Save and Load Layouts:
    Widget layouts and preferences saved and restored across sessions.
7. Logout Functionality:
    Log out redirects to global landing page.
8. Technical Implementation:
    Backend: API routes, MongoDB storage, third-party news APIs.
    Frontend: Responsive UI
    Deployment: Secure JWT, deployed with live URL.

## License

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

For more information about the MIT License visit [here](https://opensource.org/licenses/MIT).

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
