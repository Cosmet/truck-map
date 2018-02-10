## Comments

- Use react-native to build a native mobile app.
- Allow the user to search through a random list of people.  These people also have a random association of interests/hobbies.  The relevant data files are in `src/data/` of this repository.
    - Couldn't figure out how to do something similar to a autocomplete using a datalist in HTML so I made a seperate component for this.
    - Couldn't figure out how to select the text input field after selecting a user to clear that field making the auto complete list items go away. Wasn't sure how to use refs.
- Allow the user to typeahead search the people and show the results as they type. The info searched is up to you, but there are potential ways to be creative here.
    - Only added first name, last name, username, and email.
- When the user selects a person in the results, put that person on the map at a random location (location bounds are up to you). Each person should be placed randomly when selected.
    - I placed the person randomly within a block of the U.S. and parts of Canada.
- Show a profile card for the person on the map.  The info shown and UI of the card are up to you.
    - Couldn't use the image URL's for the interests because they're all http links. Would require bypassing App Transport Security which isn't recommended.

## Technical Features To Implement

- Adding infinite scroll pagination to the auto complete feature so that you don't load n number of items unless the user scrolls.
- Fix Issue with Vector Icons for phone numbers, emails, close buttons etc... to clean up the user card ui.
- Redoing the Stylesheets to be more modular with mixins and constants.


## App Features To Implement

- Company, Driver, Client Accounts
    - Company accounts would track their drivers, see their stats/data, push notifications, route they're taking.
    - Be able to assign/re-assign/un-assign loads to and from drivers.
    - Be able to see loads in proximity to driver. Possibly implement an algorithm to determine highest profitabile load to optimize routes.
    - Driver accounts can receive and push notifications such as status updates, weigh station warnings for all company drivers or even app-wide weight station warnings, cop warnings etc..
    - Get optimized routes updated frequently if traffic flow changes.
    - Client accounts can see all their loads, and receive push notifications when they're closeby/delivered.
- Load board for companies to post details about their load which all companies can see. Could include options like express which pings bobcat drivers nearby.
- More or less a combination of Uber and Waze but for trucks.
