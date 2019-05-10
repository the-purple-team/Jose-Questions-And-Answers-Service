# Product Questions and Answers

> This service

## Related Projects

  - https://github.com/teamName/repo
  - https://github.com/teamName/repo
  - https://github.com/teamName/repo
  - https://github.com/teamName/repo

## Table of Contents

1. [Usage](#Usage)
1. [Requirements](#requirements)
1. [Development](#development)

## Usage

> Some usage instructions

## API
  ## GET all questions/answers per productId
/product/:productId
{
  "product": 1,
  "questions": [
    {
      "question_id": 1,
      "question": "Nulla suscipit ligula in lacus. Curabitur at ipsum ac tellus semper interdum. Mauris ullamcorper purus sit amet nulla?",
      "answers": [
        { "user": "Ermanno", "answer": "Integer ac leo. Pellentesque ultrices mattis odio.", "createdAt": "2018-12-08 00:23:14" },
        { "user": "Izabel", "answer": "In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante.", "createdAt": "2019-02-22 13:30:05" }, { "user": "Etti", "answer": "Aenean auctor gravida sem.", "createdAt": "2018-08-05 17:23:39" },
        { "user": "Jessee", "answer": "Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa.", "createdAt": "2018-08-24 20:30:21" }],
      "votes": 0
    }
  ]
}

  ## PATCH the number of votes (add or subtract)
/:productId/:question_id

## Requirements

An `nvmrc` file is included if using [nvm](https://github.com/creationix/nvm).

- Node 6.13.0
- etc

## Development

### Installing Dependencies

From within the root directory:

```sh
npm install -g webpack
npm install
```

