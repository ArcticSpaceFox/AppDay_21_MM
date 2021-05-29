// In this file, all Page components from 'src/pages` are auto-imported. Nested
// directories are supported, and should be uppercase. Each subdirectory will be
// prepended onto the component name.
//
// Examples:
//
// 'src/pages/HomePage/HomePage.js'         -> HomePage
// 'src/pages/Admin/BooksPage/BooksPage.js' -> AdminBooksPage

import { Router, Route } from '@redwoodjs/router'

const Routes = () => {
  return (
    <Router>
      <Route path="/impressum" page={ImpressumPage} name="impressum" />
      <Route path="/admin/tags/new" page={AdminNewTagPage} name="adminNewTag" />
      <Route path="/admin/tags/{id:Int}/edit" page={AdminEditTagPage} name="adminEditTag" />
      <Route path="/admin/tags/{id:Int}" page={AdminTagPage} name="adminTag" />
      <Route path="/admin/tags" page={AdminTagsPage} name="adminTags" />
      <Route path="/admin/responses/new" page={AdminNewResponsePage} name="adminNewResponse" />
      <Route path="/admin/responses/{id:Int}/edit" page={AdminEditResponsePage} name="adminEditResponse" />
      <Route path="/admin/responses/{id:Int}" page={AdminResponsePage} name="adminResponse" />
      <Route path="/admin/responses" page={AdminResponsesPage} name="adminResponses" />
      <Route path="/admin/questions/new" page={AdminNewQuestionPage} name="adminNewQuestion" />
      <Route path="/admin/questions/{id:Int}/edit" page={AdminEditQuestionPage} name="adminEditQuestion" />
      <Route path="/admin/questions/{id:Int}" page={AdminQuestionPage} name="adminQuestion" />
      <Route path="/admin/questions" page={AdminQuestionsPage} name="adminQuestions" />
      <Route path="/admin/studiengruppes/new" page={AdminNewStudiengruppePage} name="adminNewStudiengruppe" />
      <Route path="/admin/studiengruppes/{id:Int}/edit" page={AdminEditStudiengruppePage} name="adminEditStudiengruppe" />
      <Route path="/admin/studiengruppes/{id:Int}" page={AdminStudiengruppePage} name="adminStudiengruppe" />
      <Route path="/admin/studiengruppes" page={AdminStudiengruppesPage} name="adminStudiengruppes" />
      <Route path="/admin/users/new" page={AdminNewUserPage} name="adminNewUser" />
      <Route path="/admin/users/{id:Int}/edit" page={AdminEditUserPage} name="adminEditUser" />
      <Route path="/admin/users/{id:Int}" page={AdminUserPage} name="adminUser" />
      <Route path="/admin/users" page={AdminUsersPage} name="adminUsers" />
      <Route path="/forum" page={ForumPage} name="forum" />
      <Route path="/profile" page={ProfilePage} name="profile" />
      <Route path="/groups" page={GroupsPage} name="groups" />
      <Route path="/mygroups" page={MygroupsPage} name="mygroups" />
      <Route path="/" page={HomePage} name="home" />
      <Route notfound page={NotFoundPage} />
    </Router>
  )
}

export default Routes
