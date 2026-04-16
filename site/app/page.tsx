"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Check, ShieldCheck, Mail, Phone, MapPin } from "lucide-react"

export default function ProductPage() {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      {/* Header com Logo */}
      <header className="border-b border-border py-6">
        <div className="container mx-auto px-4 flex justify-center">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-lg">A</span>
            </div>
            <span className="text-xl font-semibold text-foreground">Acme</span>
          </div>
        </div>
      </header>

      {/* Conteudo Principal */}
      <main className="flex-1 container mx-auto px-4 py-12">
        <div className="max-w-2xl mx-auto">
          {/* Informacoes do Cliente */}
          <div className="bg-card border border-border rounded-xl p-6 mb-8">
            <h2 className="font-semibold text-foreground mb-4 text-center">Dados do Cliente</h2>
            <div className="space-y-3 text-center">
              <p className="text-foreground">
                <span className="text-muted-foreground">Nome:</span>{" "}
                <span className="font-medium">Joao da Silva</span>
              </p>
              <p className="text-foreground">
                <span className="text-muted-foreground">Email:</span>{" "}
                <span className="font-medium">joao.silva@email.com</span>
              </p>
              <p className="text-foreground">
                <span className="text-muted-foreground">Telefone:</span>{" "}
                <span className="font-medium">(11) 98765-4321</span>
              </p>
              <p className="text-foreground">
                <span className="text-muted-foreground">CPF:</span>{" "}
                <span className="font-medium">123.456.789-00</span>
              </p>
            </div>
          </div>

          {/* Imagem do Produto */}
          <div className="aspect-video bg-muted rounded-xl overflow-hidden mb-8 relative">
            <Image
              src="/produto.jpg"
              alt="Imagem do produto"
              fill
              className="object-cover"
              priority
            />
          </div>

          {/* Nome e Preco */}
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-foreground mb-2 text-balance">
              Curso Completo de Marketing Digital
            </h1>
            <p className="text-muted-foreground mb-4">
              Aprenda do zero ao avancado com aulas praticas
            </p>
            <div className="flex items-center justify-center gap-3">
              <span className="text-sm text-muted-foreground line-through">R$ 497,00</span>
              <span className="text-3xl font-bold text-primary">R$ 197,00</span>
            </div>
            <p className="text-sm text-muted-foreground mt-1">
              ou 12x de R$ 19,90
            </p>
          </div>

          {/* Beneficios */}
          <div className="bg-card border border-border rounded-xl p-6 mb-8">
            <h2 className="font-semibold text-foreground mb-4">O que voce recebe:</h2>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <Check className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                <span className="text-foreground">Acesso vitalicio a mais de 50 aulas em video</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                <span className="text-foreground">Material de apoio em PDF para download</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                <span className="text-foreground">Certificado de conclusao</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                <span className="text-foreground">Suporte direto com o professor</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                <span className="text-foreground">Grupo exclusivo de alunos</span>
              </li>
            </ul>
          </div>

          {/* Botao de Compra */}
          <Button 
            className="w-full h-14 text-lg font-semibold mb-4"
            onClick={() => window.location.href = "/checkout"}
          >
            Comprar Agora
          </Button>

          <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
            <ShieldCheck className="w-4 h-4" />
            <span>Compra 100% segura - Garantia de 7 dias</span>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-border py-8 mt-auto">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            {/* Contato */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-6">
              <a 
                href="mailto:contato@acme.com.br" 
                className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
              >
                <Mail className="w-4 h-4" />
                <span className="text-sm">contato@acme.com.br</span>
              </a>
              <a 
                href="tel:+5511999999999" 
                className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
              >
                <Phone className="w-4 h-4" />
                <span className="text-sm">(11) 99999-9999</span>
              </a>
            </div>

            {/* Endereco */}
            <div className="flex items-center justify-center gap-2 text-muted-foreground mb-6">
              <MapPin className="w-4 h-4" />
              <span className="text-sm text-center">
                Av. Paulista, 1000 - Sao Paulo, SP
              </span>
            </div>

            {/* Logos de Pagamento */}
            <div className="flex items-center justify-center gap-4 mb-6">
              <div className="bg-muted rounded px-3 py-1.5">
                <span className="text-xs font-semibold text-muted-foreground">VISA</span>
              </div>
              <div className="bg-muted rounded px-3 py-1.5">
                <span className="text-xs font-semibold text-muted-foreground">MASTER</span>
              </div>
              <div className="bg-muted rounded px-3 py-1.5">
                <span className="text-xs font-semibold text-muted-foreground">PIX</span>
              </div>
              <div className="bg-muted rounded px-3 py-1.5">
                <span className="text-xs font-semibold text-muted-foreground">BOLETO</span>
              </div>
            </div>

            {/* Informacoes Legais */}
            <div className="text-center text-xs text-muted-foreground">
              <p>Acme Cursos Ltda - CNPJ: 00.000.000/0001-00</p>
              <p className="mt-1">Todos os direitos reservados</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
