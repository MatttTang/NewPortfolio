import React from 'react'
import Catalog from '../assets/PCatalog';
import '../styling/Project.css';

export default function Project(props) {
    return (
        <div id="pStyle">
            <h1>{Catalog[props.Info].Title}</h1>
            {Catalog[props.Info].hasOwnProperty("Link") &&(
                <iframe title={`${props.Info} Frame`} src={Catalog[props.Info].Link} />
            )}
            {Catalog[props.Info].hasOwnProperty("YLink") &&(
                <iframe title={`${props.Info} YLink`} width="560" height="315" src="https://www.youtube.com/embed/gbDyaXYKQBo" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
            )}
            <div className="ProjectContent">
                <p>{Catalog[props.Info].Description}</p>
                <p>{Catalog[props.Info].Exp}</p>
                <a rel="noreferrer" href={Catalog[props.Info].GitHubLink} target="_blank">GitHub</a>
            </div>
        </div>
    )
}
