import { useRouteError } from 'react-router-dom'

export const ErrorPage = (): React.JSX.Element => {
  const error: any = useRouteError()
  console.error(error)

  return (
    <div id="error-page">
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <i>{(Boolean(error.statusText)) || error.message}</i>
      </p>
    </div>
  )
}
