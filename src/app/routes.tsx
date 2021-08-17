const ROUTES = {
    homeRoute: () => '/home',
    shopRoute: () => '/shop',
    aboutUsRoute: () => '/aboutus',
    blogsRoute: () => '/blogs',
    blogRoute: (id: number) => `/blogs/:${id}`,
    productRoute: (id: number) => `/product/:${id}`,
    errorRoute: () => '/error/:error?'
}

export default ROUTES