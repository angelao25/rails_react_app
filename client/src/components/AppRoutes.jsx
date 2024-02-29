import { Route, Routes } from "react-router-dom";

import NewPostForm from "../features/posts/NewPostForm";
import PostDetails from "../features/posts/PostDetails";
import PostEditForm from "../features/posts/PostEditForm";
import PostsList from "../features/posts/PostsList";

function AppRoutes() {
    return (
        <Routes>
            <Route path="/" element={<PostsList />} />
            <Route path="posts/:id" element={<PostDetails />} />
            <Route path="/posts/:id/edit" element={<PostEditForm/>} />
            <Route path="/new" element={<NewPostForm />} />
        </Routes>
    );
}

export default AppRoutes;
