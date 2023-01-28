import styled from 'styled-components'

export const VideoPlayerContainer = styled.div`
  background-color: ${props => (props.isTheme ? '#f9f9f9' : '#181818')};
  display: flex;
`

export const VideoCard = styled.div`
  display: flex;
`

export const VideoTitle = styled.h1`
  color: ${props => (props.isTheme ? '#181818' : '#f9f9f9')};
  font-size: 14px;
`

export const VideoPlayCard = styled.div``

export const ViewsCounts = styled.p`
  color: ${props => (props.isTheme ? '#181818' : '#f9f9f9')};
  font-size: 14px;
  font-family: 'Roboto';
  margin-left: 10px;
`

export const Line = styled.hr``

export const ChannelContainer = styled.div`
  display: flex;
  align-items: center;
`

export const ProfilePicCard = styled.div``
export const ProfilePic = styled.img`
  height: 30px;
  width: 30px;
`

export const Card2 = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 10px;
`

export const Card1 = styled.div`
  margin-left: 40px;
`

export const ChannelName = styled.p`
  color: #7e858e;
  font-size: 10px;
`
export const SubscriberCount = styled.p`
  color: #7e858e;
  font-size: 10px;
`

export const Description = styled.p`
  color: ${props => (props.isTheme ? '#181818' : '#f9f9f9')};
`
