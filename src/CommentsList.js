import React from 'react';


export default({comments}) => {
   
    const renderedComments = comments.map(comment =>{
        let content;
        if(comment.status ==='approved')
        {
            content = comment.content;
        }
        if(comment.status === 'rejected'){
            content = "comment has been rejected";

        }
        if (comment.status ==='pending'){
            content ="comment under processing";
        }
        return <li key={comment.id}>{content}</li>
    })
    return (<div>
        {renderedComments}
    </div>);
}
