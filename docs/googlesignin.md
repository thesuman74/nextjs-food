### 1 . Create a form with action

```typescript
<form action={doSocialLogin}>
  <div className="my-5">
    <button
      type="submit"
      name="action"
      value="google"
      className="w-full text-center py-3 my-3 border flex space-x-2 items-center justify-center border-slate-200 rounded-lg text-slate-700 hover:border-slate-400 hover:text-slate-900 hover:shadow transition duration-150"
    >
      <img
        src="https://www.svgrepo.com/show/355037/google.svg"
        className="w-6 h-6"
        alt="Google logo"
      />
      <span>Login with Google</span>
    </button>
  </div>
</form>
```
