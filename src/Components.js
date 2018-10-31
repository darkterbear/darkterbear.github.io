import React, { Component } from 'react'

export class BottomBar extends Component {
	render() {
		const pages = ['bio', 'experience', 'honors', 'portfolio']
		return (
			<div className="bottom-bar">
				{pages.map((text, i) => {
					return <a onClick={() => this.props.onClick(i)}>{text}</a>
				})}
			</div>
		)
	}
}

export class Logo extends Component {
	render() {
		return (
			<svg
				onClick={this.props.onClick}
				className="logo"
				width="64"
				height="64"
				viewBox="0 0 64 64"
				fill="none"
				xmlns="http://www.w3.org/2000/svg">
				<path
					d="M41.0892 61.2762L38.7238 57.1904C36.7168 58.2656 34.2796 58.9824 31.4841 58.9824C26.3232 58.9824 24.2444 56.7603 24.2444 52.6029V30.167H36.5734L37.3619 25.4362H24.2444V16.1894L18.2233 16.9062V25.4362H9.55005V30.167H18.2233V52.6746C18.2233 59.2691 22.8108 64 30.9107 64C34.4947 64 38.4371 62.9965 41.0892 61.2762Z"
					fill="#527AFF"
				/>
				<path
					d="M40.3281 0H22.6948V4.80256H34.307V43.3664C34.307 49.8893 38.8228 53.76 45.489 53.76C49.3598 53.76 52.442 52.8998 54.449 51.8246L52.8721 47.4522C50.7934 48.2406 48.7863 48.7424 46.5642 48.7424C42.9086 48.7424 40.3281 47.3805 40.3281 43.6531V0Z"
					fill="#527AFF"
				/>
			</svg>
		)
	}
}
