import MypageMenu from "../../components/user/mypage/MypageMenu";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <MypageMenu />
      {children}
    </>
  );
}
