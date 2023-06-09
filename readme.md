# TOY Marketplace <a name="TOP"></a>

> React
>
> > project

---

## Live Link

Hosted in Firebase -> https://client-toy-marketplace.web.app/

## server Code link git 

Git server -> https://github.com/programming-hero-web-course-4/b7a11-toy-marketplace-server-side-delwerhossain

# install-package

    Markup :  # install-package #

- Tailwindcss
- Daisy UI
- React router
- Recharts
- Hero Icon
- firebase
- more packages etc.

## Dynamically menu

    Markup :  # Menu #

    use of

    array of obj to map

```javascript
let menuList = [
  { title: "Home", link: "/", id: 1 },
  { title: "All Toys", link: "/all", id: 2 },
  { title: "Blogs", link: "/blogs", id: 3 },
];
export const NavContext = createContext({
  menuList: [],
});
```

    See All :  first slice data after click

```javascript
const [jobsData, setJobsData] = useState([]);
const cardData = useLoaderData();
useEffect(() => {
  if (cardData) {
    setJobsData(cardData.slice(0, 4));
  }
}, []);
const handleSetData = (id) => {
  addToDb(id);
};

const allData = (check) => {
  if (check) {
    setJobsData(cardData);
  }
};
allData(false);
```

# Route declaration

    Route :  first slice data after click

```javascript
export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layouts />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/blogs",
        element: <Blogs />,
      },
      {
        path: "/mytoys",
        element: (
          <PrivateRoute>
            <MyToys />
          </PrivateRoute>
        ),
        loader: () => fetch(`https://server-toy-marketplace.vercel.app/toys`),
      },
      {
        path: "/toy/:id",
        element: (
          <PrivateRoute>
            <SingleToy />
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`https://server-toy-marketplace.vercel.app/toy/${params.id}`),
      },
      {
        path: "/categoryall/:all",
        element: <HomeCategory />,
      },
      {
        path: "/all",
        element: <ToyTables />,
      },
      {
        path: "/category/:id",
        element: <Category />,
      },
      {
        path: "/edit/:id",
        element: (
          <PrivateRoute>
            <ToyEdit />
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`https://server-toy-marketplace.vercel.app/toy/${params.id}`),
      },
      {
        path: "/add",
        element: (
          <PrivateRoute>
            <ProductUpsert />
          </PrivateRoute>
        ),
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <AuthProvider>
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  </AuthProvider>
);
```

# Private Route declaration

```javascript
const PrivateRoute = ({ children }) => {
  const location = useLocation();
  const { user, loading } = useContext(AuthContext);
  if (loading) {
    return (
      <div className="flex justify-center items-center ">
        <progress className="progress w-11/12"></progress>
      </div>
    );
  }
  if (user) {
    return children;
  }
  return <Navigate to={"/login"} state={{ from: location }} replace></Navigate>;
};
```
