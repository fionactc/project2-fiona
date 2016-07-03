+++Workflow+++

Main Functions:

Vocab:
- plan
- timeline
- item
- cart

1. Explore
  - search
  - front page items
  - view plan
    - edit (author: this copy; viewers: create new copy)
    - plan my trip (start new doc)
    - drag to 'cart'
    - bookmark
    - like
    - comment
2. Compose
  - create new plan
  - delete plan
  - save as draft
  - publish
  - last update time
  - timeline
  - item
    - item pannel
      - cart
      - search box
      - types
        - accomodation
        - transport
          - types
          - routes
          - estimated time
        - destination
          - open hours
          - info
      - stay duration
3. User
  - basic info
  - miles travelled
  - collection
    - bookmarked
    - Your plan
      - draft
      - published
  - friend
4. Nav
  - search
  - user
  - create plan
  - browse

////////////////////////////////////////////

Model
1. Member
  - profile pic
  - name
  - gender
  - email
  - miles travelled
2. Plan
  - tags
  - last edit day
  - author
  - likes
  - bookmarks
  - city
  - days
  - items
  - comment
3. Item
  - type
  - info
  - key to retrieve from API
  // destination //
  - start time
  - duration
  // transport //
  // accomodation //

Model ver2
////////////////////////////////////////////
1. Plan
  - title/ string
  - location/ string [multiple]
  - user id
  - public/ boolean
  - itineraries [multiple]
2. Location
  - location
  - start date
  - end date
3. Itineraries
  - day number
  - item [multiple]
4. item
  - location
  - type
  - start time [optional]
  - priority
5. User
  - published plans
  - draft plans
  - bookmarked
  - cart

6. Plandb