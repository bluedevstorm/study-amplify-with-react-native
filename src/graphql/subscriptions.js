/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreatePost = `subscription OnCreatePost {
  onCreatePost {
    id
    content
    image {
      bucket
      region
      key
    }
    likes
    comments {
      items {
        id
        author
        createdAt
        updatedAt
      }
      nextToken
    }
    createdAt
    updatedAt
  }
}
`;
export const onUpdatePost = `subscription OnUpdatePost {
  onUpdatePost {
    id
    content
    image {
      bucket
      region
      key
    }
    likes
    comments {
      items {
        id
        author
        createdAt
        updatedAt
      }
      nextToken
    }
    createdAt
    updatedAt
  }
}
`;
export const onDeletePost = `subscription OnDeletePost {
  onDeletePost {
    id
    content
    image {
      bucket
      region
      key
    }
    likes
    comments {
      items {
        id
        author
        createdAt
        updatedAt
      }
      nextToken
    }
    createdAt
    updatedAt
  }
}
`;
export const onCreateComment = `subscription OnCreateComment {
  onCreateComment {
    id
    author
    post {
      id
      content
      image {
        bucket
        region
        key
      }
      likes
      comments {
        nextToken
      }
      createdAt
      updatedAt
    }
    createdAt
    updatedAt
  }
}
`;
export const onUpdateComment = `subscription OnUpdateComment {
  onUpdateComment {
    id
    author
    post {
      id
      content
      image {
        bucket
        region
        key
      }
      likes
      comments {
        nextToken
      }
      createdAt
      updatedAt
    }
    createdAt
    updatedAt
  }
}
`;
export const onDeleteComment = `subscription OnDeleteComment {
  onDeleteComment {
    id
    author
    post {
      id
      content
      image {
        bucket
        region
        key
      }
      likes
      comments {
        nextToken
      }
      createdAt
      updatedAt
    }
    createdAt
    updatedAt
  }
}
`;
