// 由于数据量大，层级深，可以不考虑递归，数据量大使用递归会导致栈溢出的问题
// 可以使用 更好的算法来构建树的结构
export function createCommentTree(comments) {
  const commentMap = {};
  const rootComments = [];

  comments.forEach((comment) => {
    const id = comment.id;
    commentMap[id] = { ...comment, children: [] };

    if (comment.replyId === 0) {
      rootComments.push(commentMap[id]);
    }
  });

  const stack = [...rootComments];

  while (stack.length > 0) {
    const node = stack.pop();
    comments.forEach((comment) => {
      if (comment.replyId === node.id) {
        const childNode = commentMap[comment.id];
        node.children.push(childNode);
        stack.push(childNode);
      }
    });
  }

  return rootComments;
}
