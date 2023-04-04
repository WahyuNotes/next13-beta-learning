import React from 'react'

type Props = {}

export default function MultiDetail({params}: {params : {multiId:string}}) {
  return (
    <div>MultiDetail {params.multiId}</div>
  )
}