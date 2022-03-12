import React from 'react';
import './style.scss';
import Radio from './Radio.png';
import Logo from './logo.png';
import ReactHlsPlayer from 'react-hls-player';
// import Auth from './auth';
// import SpotifyWebApi from 'spotify-web-api-js';
// let spotify = new SpotifyWebApi();

class MusicContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      searchq: '',
      fmlink: [
        {
          name: 'Select Your Radio',
          url: 'something but nothing',
          img: Radio,
        },
        {
          name: 'Radio Mirchi 98.3 FM',
          url: 'http://peridot.streamguys.com:7150/Mirchi',
          img: 'https://onlineradiofm.in/assets/image/radio/180/radio-mirchi11111.jpg',
        },
        {
          name: 'Big FM Hindi 106.2',
          url: 'https://funasia.streamguys1.com/live4',
          img: 'https://radiosindia.com/images/bigfm.jpg',
        },
        {
          name: 'Air FM Gold',
          url: 'https://air.pc.cdn.bitgravity.com/air/live/pbaudio007/playlist.m3u8',
          img: 'https://onlineradiofm.in/assets/image/radio/180/fmgold1001.jpg',
        },
        {
          name: 'Air FM Rainbow',
          url: 'https://air.pc.cdn.bitgravity.com/air/live/pbaudio008/playlist.m3u8',
          img: 'https://onlineradiofm.in/assets/image/radio/180/all-india-air.png',
        },
        {
          name: 'Radio City 91.1 FM 1',
          url: 'https://prclive1.listenon.in/',
          img: 'https://onlineradiofm.in/assets/image/radio/180/radiocity9911.jpg',
        },
        {
          name: 'Radio City 91.1 FM 2',
          url: 'https://stream.zeno.fm/u7sgq72zrf9uv',
          img: 'https://onlineradiofm.in/assets/image/radio/180/radiocity9911.jpg',
        },
        {
          name: 'Ishq FM',
          url: 'https://drive.uber.radio/uber/bollywoodlove/icecast.audio',
          img: 'https://onlineradiofm.in/assets/image/radio/180/logo.png',
        },
        {
          name: 'Vividh Bharati',
          url: 'https://air.pc.cdn.bitgravity.com/air/live/pbaudio001/playlist.m3u8',
          img: 'https://onlineradiofm.in/assets/image/radio/180/vividh_bharati.jpg',
        },
        {
          name: '102.7 KIIS FM',
          url: 'https://ample.revma.ihrhls.com/zc185/47_y6p0gzcgex8b02/playlist.m3u8',
          img: 'https://www.radio.net/images/broadcasts/b9/c6/37042/1/c300.png',
        },
        {
          name: 'WROD 1340 AM',
          url: 'https://ice7.securenetsystems.net/WROD',
          img: 'https://d3kle7qwymxpcy.cloudfront.net/images/broadcasts/cc/83/28800/c300.png',
        },
        {
          name: 'WTOP 103.5 Top News',
          url: 'https://playerservices.streamtheworld.com/api/livestream-redirect/WTOPFM.mp3',
          img: 'https://www.radio.net/images/broadcasts/29/8c/41560/2/c300.png',
        },
        {
          name: 'BBC World Service',
          url: 'https://stream.live.vc.bbcmedia.co.uk/bbc_world_service',
          img: 'https://d3kle7qwymxpcy.cloudfront.net/images/broadcasts/dd/cb/3476/2/c300.png',
        },
        {
          name: 'FOX News Talk',
          url: 'https://streaming-ent.shoutcast.com/foxnews',
          img: 'https://d3kle7qwymxpcy.cloudfront.net/images/broadcasts/97/2e/6423/1/c300.png',
        },
        {
          name: 'BBC Radio 2',
          url: 'https://stream.live.vc.bbcmedia.co.uk/bbc_radio_two',
          img: 'https://d3kle7qwymxpcy.cloudfront.net/images/broadcasts/88/e1/3244/1/c300.png',
        },
        {
          name: '1.FM - Absolute Top 40',
          url: 'https://strmreg.1.fm/top40_mobile_mp3',
          img: 'https://d3kle7qwymxpcy.cloudfront.net/images/broadcasts/ea/8f/1380/2/c300.png',
        },
        {
          name: 'Bloomberg Radio',
          url: 'https://playerservices.streamtheworld.com/api/livestream-redirect/WBBRAMAAC.aac',
          img: 'https://d3kle7qwymxpcy.cloudfront.net/images/broadcasts/e8/aa/21853/1/c300.png',
        },
      ],
    };
    this.musicSearcher = this.musicSearcher.bind(this);
    // this.getmusic = this.getmusic.bind(this);
  }

  musicSearcher(event) {
    const val = event.target.value;
    this.setState({
      searchq: val,
    });
    console.log(this.state.searchq);
  }

  // getmusic() {
  //   fetch(
  //     'https://spotify23.p.rapidapi.com/search/?q=' +
  //       this.state.searchq +
  //       '&type=multi&offset=0&limit=10&numberOfTopResults=5',
  //     {
  //       method: 'GET',
  //       headers: {
  //         'x-rapidapi-host': 'spotify23.p.rapidapi.com',
  //         'x-rapidapi-key':
  //           'dbd5c7a9e7msh0be63f89f75242bp1c64bdjsn686599c53ceb',
  //       },
  //     }
  //   )
  //     .then((response) => response.json())
  //     .then((body) => {
  //       this.setState((previousState) => ({
  //         ...previousState,
  //         items: body,
  //       }));
  //       console.log(body);
  //       if (this.state.items.track) {
  //         this.track = this.state.items.tracks.items[0].uri;
  //       }
  //     })
  //     .catch((err) => {
  //       console.error(err);
  //     });
  // }

  componentDidMount() {}
  render() {
    let aud = new Audio('');
    aud.crossOrigin = 'crossoorigin';
    // aud.play();
    // aud.pause();
    let fm = [];
    let player1 = '';
    if (this.state.searchq !== '') {
      fm = this.state.fmlink.filter((item) =>
        // Object.hasOwnProperty(this.state.searchq)
        Object.values(item).includes(this.state.searchq)
      );
    }
    if (fm[0]) {
      const { name, url, img } = fm[0];
      const regex = new RegExp('m3u8');
      console.log(regex.test(url));
      if (regex.test(url)) {
        player1 = (
          <>
            <h2> {name}</h2>
            <img src={img} alt={name} />
            <ReactHlsPlayer src={url} autoPlay={true} controls={true} />
          </>
        );
      } else {
        player1 = (
          <>
            <h2> {name}</h2>
            <img src={img} alt={name} />
            <audio src={url} autoPlay='true' controls />
          </>
        );
      }
    }
    console.log(fm, this.state.searchq);

    return (
      <div className='MusicContainer'>
        <header className='Playingarea'>
          <img src={'.' + Logo} width='300' alt='logo' />
        </header>
        <div className='main'>
          <h1> Online Radio</h1>
          <select value={this.state.searchq} onChange={this.musicSearcher}>
            {this.state.fmlink.map((item) => (
              <option key={item.name} value={item.name}>
                {item.name}
              </option>
            ))}
          </select>
          <div className='inner'>
            {player1 ? player1 : <img src={'.' + Radio} alt='radio' />}
          </div>
        </div>
      </div>
    );
  }
}

export default MusicContainer;
