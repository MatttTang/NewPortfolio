import React from 'react'
import Catalog from '../assets/PCatalog';

export default function Project(props) {
    return (
        <div>
            <h1>{Catalog[props.Info].Description}</h1>
            {Catalog[props.Info].hasOwnProperty("Link") &&(
                <iframe src={Catalog[props.Info].Link} />
            )}
            {Catalog[props.Info].hasOwnProperty("YLink") &&(
                <iframe width="560" height="315" src="https://www.youtube.com/embed/gbDyaXYKQBo" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
            )}
        </div>
    )
}
