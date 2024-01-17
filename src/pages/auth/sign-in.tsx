import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ToastAction } from "@/components/ui/toast";
import { useToast } from "@/components/ui/use-toast";
import { zodResolver } from "@hookform/resolvers/zod";
import { Label } from "@radix-ui/react-label";
import { Helmet } from "react-helmet-async";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { z } from "zod";

const signInForm = z.object({
  email: z.string().email(),
});

type SignInForm = z.infer<typeof signInForm>;

export const SignIn = () => {
  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<SignInForm>({ resolver: zodResolver(signInForm) });

  const { toast } = useToast();

  const navigate = useNavigate();

  const handleSignIn = async (data: SignInForm) => {
    try {
      console.log(data);
      toast({
        title: "Link de acesso enviado",
        description: "Enviamos um link de acesso para seu e-mail",
      });
      navigate("/");
    } catch (error) {
      console.log(error);
      toast({
        title: "Erro ao enviar link de acesso",
        description: "Verifique se o e-mail está correto",
        variant: "destructive",
        action: (
          <ToastAction altText="Enviar novamente">Enviar novamente</ToastAction>
        ),
      });
    }
  };

  return (
    <>
      <Helmet title="Sign In" />
      <div className="p-8">
        <Button
          asChild
          className="absolute top-8 right-8"
          type="submit"
          variant="ghost"
          disabled={isSubmitting}
        >
          <Link to="/sign-up">Criar conta</Link>
        </Button>
        <div className="w-[350px] flex flex-col justify-center gap-6">
          <div className="flex flex-col gap-2 text-center">
            <h1 className="text-2xl font-semibold tracking-tight">
              Acessar Painel
            </h1>
            <p className="text-sm text-muted-foreground">
              Acompanhe sua vendas pelo painel do parceiro
            </p>
          </div>
          <form className="space-y-4" onSubmit={handleSubmit(handleSignIn)}>
            <div className="space-y-2">
              <Label htmlFor="email">Seu e-mail</Label>
              <Input
                id="email"
                type="email"
                className="input"
                placeholder="E-mail"
                {...register("email")}
              />
            </div>
            <Button className="w-full" type="submit" disabled={isSubmitting}>
              Acessar Painel
            </Button>
          </form>
        </div>
      </div>
    </>
  );
};
