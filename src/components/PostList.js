import React, { Component } from 'react';

import PostItem from './PostItem';

class PostList extends Component {
  state = {
    posts: [
      {
        id: 1,
        author: {
          name: 'Osvaldo Vidoy',
          avatar:
            'https://www.gravatar.com/avatar/00000000000000000000000000000000?d=wavatar&f=y',
        },
        date: '12 Jul 2019',
        content: 'Pessoal, alguém aí esta atrasado com o bootcamp?',
        comments: [
          {
            id: 2,
            author: {
              name: 'José da Silva',
              avatar:
                'https://www.gravatar.com/avatar/00000000000000000000000000000000?d=retro&f=y',
            },
            date: '12 Jul 2019',
            content:
              'Eu estou muito atrasado, mas acredito que estou aprendendo todos os modulos de forma eficaz.',
          },
        ],
      },
      {
        id: 3,
        author: {
          name: 'Luís Inácio',
          avatar:
            'https://www.gravatar.com/avatar/00000000000000000000000000000000?d=monsterid&f=y',
        },
        date: '12 Jul 2019',
        content: 'Dilma, como estão as coisas aí fora?',
        comments: [
          {
            id: 4,
            author: {
              name: 'Dilma Russussete',
              avatar:
                'https://www.gravatar.com/avatar/00000000000000000000000000000000?d=mp&f=y',
            },
            date: '12 Jul 2019',
            content: 'Lula, aqui está fazendo muito friooooooooo!!!',
          },
        ],
      },
    ],
  };

  render() {
    const { posts } = this.state;

    return (
      <div className="postlist">
        {posts.map(post => (
          <PostItem key={post.id} {...post} />
        ))}
      </div>
    );
  }
}

export default PostList;
