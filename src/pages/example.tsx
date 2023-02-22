import { useParams } from 'react-router-dom'

const Example = () => {
  const params = useParams()

  return (
    <div>
      <br />
      This is an example: <span>{params.id}</span>
    </div>
  )
}

export default Example
