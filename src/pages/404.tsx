import { Result } from "antd"
import { Link } from "gatsby"
import React, { FC } from "react"

const PageNotFound: FC = () => {
  return (
    <Result
      status="404"
      title="404"
      subTitle="Sorry, the page you visited does not exist."
      extra={<Link to="/">Back Home</Link>}
    />
  )
}

export default PageNotFound
