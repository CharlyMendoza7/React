import React from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap'




function RenderDish({dish}) {
    
    if (dish != null) {
        return (
            <div>
                <Card>
                    <CardImg width="100%" src={dish.image} alt={dish.name} />
                    <CardBody>
                        <CardTitle>{dish.name} </CardTitle>
                        <CardText>{dish.description}</CardText>
                    </CardBody>
                </Card>
            </div>
        );
    }
    else {
        return (
            <div />
        );
    }
}

function RenderComments({comments}) {
    if (comments != null) {

        const commList = comments.map(comment => {
            return (
                <div>
                    <ul className="list-unstyled" key={comment.id}>
                        <li className="mb-3">{comment.comment}</li>
                        <li className="list-inline-item m-1">-- {comment.author} , </li>
                        <li className="list-inline-item">
                            {new Intl.DateTimeFormat("en-US", {
                            year: "numeric",
                            month: "short",
                            day: "2-digit"
                            }).format(new Date(Date.parse(comment.date)))}
                        </li>
                    </ul>
                </div>
            );
        })
        return (
            <div>
                <h4>Comments</h4>
                {commList}
            </div>
        )
    }
    else {
        return (
            <div></div>
        );
    }   
}


const DishDetail = (props) => {
        
    if(props.dish != null) {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-12 col-md-5 m-1">
                        <RenderDish dish={props.dish}/>
                    </div>
                    <div className="col-12 col-md-5 m-1">
                        <RenderComments comments={props.dish.comments}/>
                    </div>
                </div>
            </div>
        );
    }
    else {
        return (
            <div>
            </div>
        );
    }
}    


export default DishDetail;  