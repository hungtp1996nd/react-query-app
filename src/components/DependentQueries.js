import React from 'react'
import { useQuery } from "react-query";
import axios from 'axios'

const fetchChannelFromEmail = (email) => {
  return axios.get(`http://localhost:4000/users/${email}`)
}

const fetchCoursesFromChannelId = (channelId) => {
  return axios.get(`http://localhost:4000/channels/${channelId}`)
}

const DependentQueries = ({ email }) => {
  const { data: user } = useQuery(['channel-from-email', email], () => fetchChannelFromEmail(email))
  const channelId = user?.data.channelId;
  const { data: courses } = useQuery(
    ['courses', channelId],
    () => fetchCoursesFromChannelId(channelId),
    {
      enabled: !!channelId,
    }
  )

  return (
    <>
      <div>Dependent Queries</div>
      <div>
        {
          courses?.data?.courses?.map(course => <div key={course}>{course}</div>)
        }
      </div>
    </>
  )
}

export default DependentQueries;
