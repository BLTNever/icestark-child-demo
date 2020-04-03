import React, { Component } from 'react'
import { Menu, Icon, Layout } from 'antd'
import { Link, withRouter } from 'react-router-dom'
import myMenu from '@config/menu'
const SubMenu = Menu.SubMenu;

const { Sider } = Layout
class MySider extends Component {
	constructor(props) {
		super(props)
		this.state = { title: '运营后台', collapsed: false, menuList: [], selected: '', originMenu: myMenu }
	}
	onCollapse = collapsed => {
		this.setState({ collapsed })
	}
	menuOperate = ary => {
		let newMenu = []
		let some = null
		if (ary.length === 0) {
			this.props.history.push('/403')
		} else {
			ary.forEach(element => {
				some = myMenu.find((el) => {
					return el.path === element.path
				})
				newMenu.push(some)
			})

			this.setState({
				menuList: newMenu
			})

		}
	}

	getInfo = async (ary) => {
		this.menuOperate(ary)
	}
	static getDerivedStateFromProps(props, state) {
		let selected = props.location.pathname
		return { selected };
	}

	componentDidMount() {

		let ary = myMenu
		let pathname = this.props.location.pathname

		let selected = pathname
		this.setState({
			selected
		}, function () {
			this.getInfo(ary)
		})
	}

	componentWillUnmount() { }
	render() {
		let { collapsed, menuList, selected } = this.state
		return (
			<Sider collapsible collapsed={this.state.collapsed} onCollapse={this.onCollapse}>
				<div className="logoSider" id="mySider">
					<div className="outsiderlogo">
						{collapsed ? (
							''
						) : (
								<div level={3} className="siderTitle">
									{this.state.title}
								</div>
							)}
					</div>
				</div>
				{selected.length > 0 ? <Menu defaultOpenKeys={['sub1']} theme="dark" defaultSelectedKeys={[selected]} mode="inline">
					{menuList.map((item, index) => {
						let myIndex = index + 1
						let length = item.children.length
						if (length > 0 && item.menuShow) {
							return (
								<SubMenu
									key={'sub' + myIndex}
									title={
										<span>
											<Icon type={item.icon} />
											<span></span>
										</span>
									}
								>
									{item.children.map((item) => {
										return (
											<Menu.Item key={item.path}>
												<Link to={item.path}>{item.name}</Link>
											</Menu.Item>
										)
									})}
								</SubMenu>
							)
						} else {
							return (<Menu.Item key={item.path}>
								<Icon type={item.icon} />
								<span>
									<Link to={item.path}>{item.name}</Link>
								</span>
							</Menu.Item>)
						}

					})}
				</Menu> : ''}
			</Sider>
		)
	}
}

export default withRouter(MySider)
