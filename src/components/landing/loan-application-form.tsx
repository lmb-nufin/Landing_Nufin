"use client";

import { useFormState } from "react-dom";
import { useEffect, useState } from "react";
import { processLoanApplication } from "@/lib/actions";
import type { LoanApplicationFormState } from "@/lib/schemas";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { loanApplicationSchema } from "@/lib/schemas";
import type { LoanApplicationData } from "@/lib/schemas";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { useToast } from "@/hooks/use-toast";
import { Loader2, CheckCircle, XCircle, Banknote } from "lucide-react";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";

const initialState: LoanApplicationFormState = {
  status: "idle",
  message: "",
};

export function LoanApplicationForm() {
  const [formState, formAction] = useFormState(
    processLoanApplication,
    initialState
  );
  const { toast } = useToast();
  const [currentStep, setCurrentStep] = useState(0);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isAlertOpen, setIsAlertOpen] = useState(false);

  const {
    control,
    trigger,
    getValues,
    formState: { errors },
  } = useForm<LoanApplicationData>({
    resolver: zodResolver(loanApplicationSchema),
    defaultValues: {
      creditScore: 650,
      income: 15000,
      debt: 5000,
      loanAmount: 5000,
      age: 28,
      location: "Mexico City, CDMX",
      consentGiven: false,
    },
  });

  useEffect(() => {
    setIsSubmitting(false);
    if (formState.status === 'error') {
      toast({
        variant: "destructive",
        title: "Error en la solicitud",
        description: formState.message,
      });
      setIsAlertOpen(true);
    }
    if (formState.status === 'success') {
      setIsAlertOpen(true);
    }
  }, [formState, toast]);

  const handleNextStep = async () => {
    const fieldsToValidate: (keyof LoanApplicationData)[][] = [
      ["age", "location", "employmentStatus"],
      ["creditScore", "income", "debt", "loanAmount"],
      ["consentGiven"],
    ];
    const isValid = await trigger(fieldsToValidate[currentStep]);
    if (isValid) {
      setCurrentStep((prev) => prev + 1);
    }
  };

  const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    const formData = new FormData(e.currentTarget);
    formAction(formData);
  };

  const steps = [
    { name: "Información Personal", fields: ["age", "location", "employmentStatus"] },
    { name: "Datos Financieros", fields: ["creditScore", "income", "debt", "loanAmount"] },
    { name: "Confirmación", fields: ["consentGiven"] },
  ];

  return (
    <section id="aplicar" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <Card className="max-w-3xl mx-auto rounded-3xl shadow-2xl shadow-primary/10 border-border/50 bg-background/50 backdrop-blur-xl">
          <form onSubmit={handleFormSubmit}>
            <CardHeader className="text-center">
              <CardTitle className="text-3xl font-extrabold">
                Solicita tu préstamo ahora
              </CardTitle>
              <CardDescription className="text-lg">
                Completa el formulario en 3 simples pasos.
              </CardDescription>
              <div className="w-full bg-muted rounded-full h-2.5 mt-4">
                <div
                  className="bg-primary h-2.5 rounded-full transition-all duration-300"
                  style={{ width: `${((currentStep + 1) / steps.length) * 100}%` }}
                ></div>
              </div>
            </CardHeader>
            <CardContent className="space-y-6">
              {currentStep === 0 && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <Controller
                    name="age"
                    control={control}
                    render={({ field }) => (
                      <div className="space-y-2">
                        <Label htmlFor="age">Edad</Label>
                        <Input id="age" type="number" {...field} />
                        {errors.age && <p className="text-destructive text-sm">{errors.age.message}</p>}
                      </div>
                    )}
                  />
                  <Controller
                    name="location"
                    control={control}
                    render={({ field }) => (
                      <div className="space-y-2">
                        <Label htmlFor="location">Ubicación (Ciudad, Estado)</Label>
                        <Input id="location" {...field} />
                        {errors.location && <p className="text-destructive text-sm">{errors.location.message}</p>}
                      </div>
                    )}
                  />
                  <Controller
                    name="employmentStatus"
                    control={control}
                    render={({ field }) => (
                      <div className="space-y-2 md:col-span-2">
                        <Label htmlFor="employmentStatus">Estado Laboral</Label>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <SelectTrigger id="employmentStatus">
                            <SelectValue placeholder="Selecciona tu estado laboral" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="employed">Empleado</SelectItem>
                            <SelectItem value="unemployed">Desempleado</SelectItem>
                            <SelectItem value="self-employed">Autoempleado</SelectItem>
                            <SelectItem value="student">Estudiante</SelectItem>
                          </SelectContent>
                        </Select>
                         {errors.employmentStatus && <p className="text-destructive text-sm">{errors.employmentStatus.message}</p>}
                      </div>
                    )}
                  />
                </div>
              )}

              {currentStep === 1 && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                   <Controller
                    name="loanAmount"
                    control={control}
                    render={({ field }) => (
                      <div className="space-y-2 md:col-span-2">
                        <Label htmlFor="loanAmount">Monto del Préstamo (MXN)</Label>
                        <Input id="loanAmount" type="number" step="100" {...field} />
                         {errors.loanAmount && <p className="text-destructive text-sm">{errors.loanAmount.message}</p>}
                      </div>
                    )}
                  />
                   <Controller
                    name="income"
                    control={control}
                    render={({ field }) => (
                      <div className="space-y-2">
                        <Label htmlFor="income">Ingreso Mensual (MXN)</Label>
                        <Input id="income" type="number" step="500" {...field} />
                         {errors.income && <p className="text-destructive text-sm">{errors.income.message}</p>}
                      </div>
                    )}
                  />
                   <Controller
                    name="debt"
                    control={control}
                    render={({ field }) => (
                      <div className="space-y-2">
                        <Label htmlFor="debt">Deuda Total Actual (MXN)</Label>
                        <Input id="debt" type="number" step="500" {...field} />
                         {errors.debt && <p className="text-destructive text-sm">{errors.debt.message}</p>}
                      </div>
                    )}
                  />
                   <Controller
                    name="creditScore"
                    control={control}
                    render={({ field }) => (
                      <div className="space-y-2 md:col-span-2">
                        <Label htmlFor="creditScore">Puntaje de Crédito (aprox.)</Label>
                        <Input id="creditScore" type="number" {...field} />
                        <p className="text-xs text-muted-foreground">Si no lo conoces, un estimado está bien.</p>
                         {errors.creditScore && <p className="text-destructive text-sm">{errors.creditScore.message}</p>}
                      </div>
                    )}
                  />
                </div>
              )}

              {currentStep === 2 && (
                <div className="space-y-4">
                  <h3 className="text-lg font-medium text-center">Revisión y Confirmación</h3>
                  <Card className="bg-background/50">
                    <CardContent className="p-4 grid grid-cols-2 gap-2 text-sm">
                      <div><strong>Monto:</strong> ${getValues("loanAmount")}</div>
                      <div><strong>Edad:</strong> {getValues("age")}</div>
                      <div><strong>Ingreso:</strong> ${getValues("income")}</div>
                       <div><strong>Deuda:</strong> ${getValues("debt")}</div>
                      <div className="col-span-2"><strong>Ubicación:</strong> {getValues("location")}</div>
                    </CardContent>
                  </Card>
                   <Controller
                    name="consentGiven"
                    control={control}
                    render={({ field }) => (
                       <div className="items-top flex space-x-2 pt-4">
                         <Checkbox id="consentGiven" checked={field.value} onCheckedChange={field.onChange} name={field.name} />
                          <div className="grid gap-1.5 leading-none">
                            <label
                              htmlFor="consentGiven"
                              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                            >
                              Acepto los Términos y Condiciones y el Aviso de Privacidad.
                            </label>
                            {errors.consentGiven && <p className="text-destructive text-sm">{errors.consentGiven.message}</p>}
                          </div>
                        </div>
                    )}
                  />
                </div>
              )}
            </CardContent>
            <CardFooter className="flex justify-between">
              {currentStep > 0 && (
                <Button
                  type="button"
                  variant="outline"
                  onClick={() => setCurrentStep((prev) => prev - 1)}
                  className="rounded-3xl"
                >
                  Anterior
                </Button>
              )}
               <div className={currentStep === 0 ? 'w-full text-right' : ''}>
                {currentStep < steps.length - 1 ? (
                    <Button type="button" onClick={handleNextStep} className="rounded-3xl">
                    Siguiente
                    </Button>
                ) : (
                    <Button type="submit" disabled={isSubmitting} className="rounded-3xl">
                    {isSubmitting ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : <Banknote className="mr-2" />}
                    Obtener Decisión IA
                    </Button>
                )}
               </div>
            </CardFooter>
          </form>
        </Card>

        {formState.data && (
            <AlertDialog open={isAlertOpen} onOpenChange={setIsAlertOpen}>
                <AlertDialogContent className="rounded-3xl">
                <AlertDialogHeader>
                    {formState.status === 'success' ? (
                        <CheckCircle className="w-16 h-16 mx-auto text-green-500" />
                    ) : (
                        <XCircle className="w-16 h-16 mx-auto text-destructive" />
                    )}
                    <AlertDialogTitle className="text-center text-2xl pt-4">
                        {formState.status === 'success' ? '¡Solicitud Aprobada!' : 'Solicitud Rechazada'}
                    </AlertDialogTitle>
                    <AlertDialogDescription className="text-center">
                    {formState.message}
                    {formState.data.approved && formState.data.interestRate && (
                        <p className="font-bold text-lg mt-2">
                        Tasa de Interés: {formState.data.interestRate}%
                        </p>
                    )}
                    </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                    <AlertDialogAction onClick={() => setIsAlertOpen(false)} className="w-full rounded-3xl">Cerrar</AlertDialogAction>
                </AlertDialogFooter>
                </AlertDialogContent>
            </AlertDialog>
        )}
      </div>
    </section>
  );
}
