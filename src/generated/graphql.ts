import { GraphQLClient } from 'graphql-request';
import { RequestInit } from 'graphql-request/dist/types.dom';
import { useMutation, useQuery, UseMutationOptions, UseQueryOptions } from '@tanstack/react-query';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };

function fetcher<TData, TVariables>(client: GraphQLClient, query: string, variables?: TVariables, headers?: RequestInit['headers']) {
  return async (): Promise<TData> => client.request<TData, TVariables>(query, variables, headers);
}
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type CreateNotificationInput = {
  id?: InputMaybe<Scalars['ID']>;
  message: Scalars['String'];
};

export type CreatePostInput = {
  body: Scalars['String'];
  category: Scalars['String'];
  id?: InputMaybe<Scalars['ID']>;
  published: Scalars['Boolean'];
  title: Scalars['String'];
};

export type Mutation = {
  __typename?: 'Mutation';
  addNotification: Notification;
  createPost: Post;
};


export type MutationAddNotificationArgs = {
  data: Scalars['String'];
};


export type MutationCreatePostArgs = {
  data: CreatePostInput;
};

export type Notification = {
  __typename?: 'Notification';
  id?: Maybe<Scalars['ID']>;
  message: Scalars['String'];
};

export type Post = {
  __typename?: 'Post';
  body: Scalars['String'];
  category: Scalars['String'];
  id: Scalars['ID'];
  published: Scalars['Boolean'];
  title: Scalars['String'];
};

export type Query = {
  __typename?: 'Query';
  notifications: Array<Maybe<Notification>>;
  post: Post;
  posts: Array<Maybe<Post>>;
};


export type QueryPostArgs = {
  id: Scalars['ID'];
};

export type Subscription = {
  __typename?: 'Subscription';
  notificationAdded: Notification;
};

export type CreatePostMutationVariables = Exact<{
  data: CreatePostInput;
}>;


export type CreatePostMutation = { __typename?: 'Mutation', createPost: { __typename?: 'Post', body: string, category: string, id: string, published: boolean } };

export type GetAllPostsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetAllPostsQuery = { __typename?: 'Query', posts: Array<{ __typename?: 'Post', body: string, category: string, id: string, published: boolean } | null> };

export type GetPostQueryVariables = Exact<{
  input: Scalars['ID'];
}>;


export type GetPostQuery = { __typename?: 'Query', post: { __typename?: 'Post', body: string, category: string, id: string, published: boolean } };

export type GetAllNotificationsSubscriptionVariables = Exact<{ [key: string]: never; }>;


export type GetAllNotificationsSubscription = { __typename?: 'Subscription', notificationAdded: { __typename?: 'Notification', message: string, id?: string | null } };


export const CreatePostDocument = `
    mutation CreatePost($data: CreatePostInput!) {
  createPost(data: $data) {
    body
    category
    id
    published
  }
}
    `;
export const useCreatePostMutation = <
      TError = unknown,
      TContext = unknown
    >(
      client: GraphQLClient,
      options?: UseMutationOptions<CreatePostMutation, TError, CreatePostMutationVariables, TContext>,
      headers?: RequestInit['headers']
    ) =>
    useMutation<CreatePostMutation, TError, CreatePostMutationVariables, TContext>(
      ['CreatePost'],
      (variables?: CreatePostMutationVariables) => fetcher<CreatePostMutation, CreatePostMutationVariables>(client, CreatePostDocument, variables, headers)(),
      options
    );
export const GetAllPostsDocument = `
    query GetAllPosts {
  posts {
    body
    category
    id
    published
  }
}
    `;
export const useGetAllPostsQuery = <
      TData = GetAllPostsQuery,
      TError = unknown
    >(
      client: GraphQLClient,
      variables?: GetAllPostsQueryVariables,
      options?: UseQueryOptions<GetAllPostsQuery, TError, TData>,
      headers?: RequestInit['headers']
    ) =>
    useQuery<GetAllPostsQuery, TError, TData>(
      variables === undefined ? ['GetAllPosts'] : ['GetAllPosts', variables],
      fetcher<GetAllPostsQuery, GetAllPostsQueryVariables>(client, GetAllPostsDocument, variables, headers),
      options
    );
export const GetPostDocument = `
    query getPost($input: ID!) {
  post(id: $input) {
    body
    category
    id
    published
  }
}
    `;
export const useGetPostQuery = <
      TData = GetPostQuery,
      TError = unknown
    >(
      client: GraphQLClient,
      variables: GetPostQueryVariables,
      options?: UseQueryOptions<GetPostQuery, TError, TData>,
      headers?: RequestInit['headers']
    ) =>
    useQuery<GetPostQuery, TError, TData>(
      ['getPost', variables],
      fetcher<GetPostQuery, GetPostQueryVariables>(client, GetPostDocument, variables, headers),
      options
    );
export const GetAllNotificationsDocument = `
    subscription GetAllNotifications {
  notificationAdded {
    message
    id
  }
}
    `;