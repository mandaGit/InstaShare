import './index.css'

const NotFound = props => {
  const {history} = props
  const onClickRetry = () => {
    history.push('/')
  }

  return (
    <div className="not-found-container">
      <img
        className="not-found-img"
        src="https://res.cloudinary.com/diufdkpeh/image/upload/v1698773477/erroring_1page_not_found_wdovnj.png"
        alt="page not found"
      />
      <h1 className="no-found-heading">Page Not Found</h1>
      <p>we are sorry, the page you requested could not be found</p>
      <p>Please go back to homepage</p>
      <button type="button" className="home-page-btn" onClick={onClickRetry}>
        Home Page
      </button>
    </div>
  )
}

export default NotFound
