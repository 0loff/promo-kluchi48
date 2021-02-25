import React from 'react'
import classes from './Workflow.scss'
import workFlowImg from '../../img/workFlowImg.png'

const Workflow = props => (
    <article className={ classes.workflow }>
        <div className={ classes.workflowContent + ' container' }>
            <div classes={ classes.workflowList }>
                <h2>Как мы работаем</h2>
                { props.workFlowList.map(( item, index ) => (
                        <div
                            key={ index }
                            className={ classes.workflowList__item + item.img }>
                            <span>{ item.title }</span>
                            <span>{ item.content }</span>
                        </div>
                    )) 
                }
            </div>
            <img src={ workFlowImg } className={ classes.workflowContent__img } alt="Ключи"/>
        </div>
    </article>
)

export default Workflow