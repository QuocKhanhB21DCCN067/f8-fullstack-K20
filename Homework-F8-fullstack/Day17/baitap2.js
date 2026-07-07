const comments = [
  { id: 1, user: "An", content: "Sản phẩm rất tốt!", rating: 5, verified: true, likes: 12 },
  { id: 2, user: "", content: "ok", rating: 3, verified: false, likes: 0 },
  { id: 3, user: "Bình", content: "Mua lần 2 rồi, vẫn chất lượng", rating: 4, verified: true, likes: 8 },
  { id: 4, user: "Chi", content: "   ", rating: null, verified: false, likes: 2 },
  { id: 5, user: "Duy", content: "Giao hàng nhanh, đóng gói cẩn thận, sẽ ủng hộ tiếp!", rating: 5, verified: true, likes: 20 },
  { id: 6, user: null, content: "Tệ quá", rating: 1, verified: false, likes: 0 },
  { id: 7, user: "Em", content: "Bình thường", rating: 3, verified: true, likes: 1 },
];

// Hàm 1 
function isValidComment(comment) {
    let isValidUser = comment.user !== "" && comment.user !== null && comment.user !== undefined
    let isValidContent = comment.content !==  null && comment.content !== undefined && comment.content.trim().length > 5 
    let isValidRating = comment.rating !== null && comment.rating !== undefined 

    return isValidUser && isValidContent && isValidRating
}

// console.log(isValidComment(comments[0]));

// Hàm 2
function filterValidComments(comments) {
    const validIndex = []
    const validId = []

    comments.forEach((comment, index) => {
      if (isValidComment(comment)) {
        validIndex.push(`comment[${index}]`)
        validId.push(comment.id)
      }
    })

    console.log(validIndex);
    console.log(validId);
    

    return comments.filter(isValidComment)
}



// Hàm 3 
function getCommentStats(validComments) {
  const commentValid = validComments.length

  const totalCommentRating = validComments.reduce((prev, curr) => {
    return prev + curr.rating
  }, 0)

  const avgCommentRating = commentValid > 0 ? Number((totalCommentRating / commentValid).toFixed(1)) : 0

  const commentLike = validComments.reduce((prev, curr) => {
    return prev + curr.likes
  }, 0)

  const checkVerifiedComment = validComments.reduce((prev, curr) => {
    return prev + curr.verified
  }, 0) 

  const topCommentValid = validComments.reduce((prev, curr) => {
    return (curr.likes > prev.likes) ? curr : prev
  }, comments[0])  
  
  return {
    total: commentValid,
    avgRating: avgCommentRating,
    totalLikes: commentLike,
    verifiedCount: checkVerifiedComment, 
    topComment: topCommentValid
  }
}

// console.log(getCommentStats(filterValidComments(comments)));

// Hàm 4 
function formatComment(comment) {

  const stars = "⭐".repeat(comment.rating)

  const userDisplay = comment.verified ? `${comment.user} ✓` : comment.user;

  return `"${stars} | ${userDisplay} | ${comment.content} | 👍 ${comment.likes}"`
}

// console.log(formatComment(comments[0]));









