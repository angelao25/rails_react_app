import React from "react";
import { Route, Routes } from "react-router-dom";
import PostDetails from "../features/posts/PostDetails";
import PostsList from "../features/posts/PostsList";


function AppRoutes() {
    return (
        <Routes>
            <Route path="/" element={<PostsList />} />
            <Route path="posts/:id" element={<PostDetails />} />
            <Route path="/new" element={<h1>New Post Form</h1>} />
        </Routes>
    );
}

export default AppRoutes;
