import {Component} from 'react'

import Cookies from 'js-cookie'

import SlideBar from '../SideBar'

import {
  TrendingContainer,
  TrendingHeading,
  TrendingCard,
  TrendingCard2,
  TrendingOrderList,
  TrendingImage,
  TrendingImageContainer,
  TrendingTitle,
  TrendingCount,
  TrendingPublished,
} from './styledComponents'

class Trending extends Component {
  state = {
    trendingList: [],
    channeList: [],
  }

  componentDidMount() {
    this.getTrendingData()
  }

  getTrendingData = async () => {
    const apiUrl = 'https://apis.ccbp.in/videos/trending'
    const jwtToken = Cookies.get('jwt_token')
    const options = {
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
      method: 'GET',
    }
    const response = await fetch(apiUrl, options)
    const data = await response.json()
    const trendingData = data.videos.map(each => ({
      id: each.id,
      channel: each.channel,
      publishedAt: each.published_at,
      thumbnailUrl: each.thumbnail_url,
      title: each.title,
      viewCount: each.view_count,
    }))
    const channelData = {
      name: data.channel.name,
      profileImageUrl: data.channel.profile_image_url,
    }
    this.setState({
      trendingList: trendingData,
      channeList: channelData,
    })
  }

  render() {
    const {trendingList, channeList} = this.state
    console.log(channeList)
    return (
      <TrendingContainer>
        <SlideBar />
        <TrendingCard>
          <TrendingHeading> Trending </TrendingHeading>
          <TrendingOrderList>
            {trendingList.map(each => (
              <TrendingImageContainer>
                <TrendingImage src={each.thumbnailUrl} alt="a" />
                <TrendingCard2>
                  <TrendingTitle>{each.title} </TrendingTitle>
                  <TrendingCount> {each.viewCount} Views </TrendingCount>
                  <TrendingPublished> {each.publishedAt} </TrendingPublished>
                </TrendingCard2>
              </TrendingImageContainer>
            ))}
          </TrendingOrderList>
        </TrendingCard>
      </TrendingContainer>
    )
  }
}

export default Trending
