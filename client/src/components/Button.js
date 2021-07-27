import React from 'react'

export default function Button({action,title}) {
    return <button onClick={action}>{title}</button>;
}
